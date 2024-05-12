import { codes, types, constants } from 'micromark-util-symbol'

export function remarkSpoiler() {
  const self = this
  const data = self.data()

  const micromarkExtensions = data.micromarkExtensions || (data.micromarkExtensions = [])
  const fromMarkdownExtensions = data.fromMarkdownExtensions || (data.fromMarkdownExtensions = [])

  micromarkExtensions.push(spoilerSyntax())
  fromMarkdownExtensions.push(spoilerFromMarkdown())
}

function spoilerSyntax() {
  return {
    text: {
      [codes.verticalBar]: spoilerConstruct,
    },
  }
}

const spoilerConstruct = { name: 'spoiler', tokenize: spoilerTokenize }
const markerConstruct = { tokenize: markerTokenize, partial: true }

function spoilerTokenize(effects, ok, nok) {
  function start() {
    effects.enter('spoiler')
    return effects.attempt(markerConstruct, contentStart, nok)
  }

  function contentStart() {
    effects.enter(types.chunkText, {
      contentType: constants.contentTypeText,
    })
    return content
  }

  function content() {
    return effects.check(markerConstruct, contentEnd, consumeData)
  }

  function consumeData(code) {
    if (code === codes.eof || code < codes.horizontalTab) {
      return nok
    }
    effects.consume(code)
    return content
  }

  function contentEnd() {
    effects.exit(types.chunkText)
    return effects.attempt(markerConstruct, after, nok)
  }

  function after() {
    effects.exit('spoiler')
    return ok
  }

  return start
}

function markerTokenize(effects, ok, nok) {
  const previous = this.previous
  let markSize = 0

  function start() {
    if (previous === codes.verticalBar) {
      return nok
    }
    effects.enter('spoilerMarker')
    return marker
  }

  function marker(code) {
    if (code === codes.verticalBar) {
      if (markSize > 1) {
        return nok
      }
      effects.consume(code)
      markSize++
      return marker
    }
    if (markSize < 2) {
      return nok
    }
    effects.exit('spoilerMarker')
    return ok
  }

  return start
}

function spoilerFromMarkdown() {
  function enterHandler(token) {
    this.enter(
      {
        type: 'spoiler',
        children: [],
      },
      token,
    )
  }

  function exitHandler(token) {
    const node = this.stack[this.stack.length - 1]
    this.exit(token)
    node.data = {
      ...node.data,
      hName: 'span',
      hProperties: {
        className: 'spoiler',
        title: '你知道的太多了',
      },
    }
  }

  return {
    enter: {
      spoiler: enterHandler,
    },
    exit: {
      spoiler: exitHandler,
    },
  }
}
