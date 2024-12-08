/**
 * 定义接口：代码定义了一个名为 ILyric 的接口，它有两个属性：time 和 text，分别表示歌词的时间（毫秒）和文本。

定义正则表达式：代码定义了一个名为 timeRegExp 的正则表达式，用于匹配歌词中的时间部分。
这个正则表达式可以匹配形如 [02:11.842] 的时间格式。

定义函数：代码定义了一个名为 parseLyric 的函数，它接收一个歌词字符串作为参数，并返回一个 ILyric 对象数组。

分割歌词字符串：函数首先使用 split('\n') 方法将歌词字符串分割成一行行的歌词。

解析每一行歌词：函数然后遍历每一行歌词，使用 timeRegExp.exec() 方法匹配时间部分，并获取时间文本。

计算时间：函数使用 Number() 方法将时间部分转换为数字，并计算总时间（毫秒）。

获取文本：函数使用 replace() 方法将时间部分从原始歌词中删除，获取文本部分。

添加到数组：函数将解析后的歌词对象添加到 lyrics 数组中。

返回结果：函数返回 lyrics 数组。

这段代码的主要作用是将歌词字符串解析为一个 ILyric 对象数组，每个对象包含歌词的时间（毫秒）和文本。这对于在音乐播放器中显示歌词非常有用。
 */

export interface ILyric {
  time: number
  text: string
}

// [02:11.842]这世界有那么多人
const timeRegExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/
export function parseLyric(lyricString: string) {
  // 1.拿到一行行的歌词
  const lines: string[] = lyricString.split('\n')

  // 2.对每句歌词进行解析, 解析成对应的对象
  const lyrics: ILyric[] = []
  for (const line of lines) {
    // 1.匹配结果
    const results = timeRegExp.exec(line)
    if (!results) continue

    // 2.获取每一组的时间
    const time1 = Number(results[1]) * 60 * 1000
    const time2 = Number(results[2]) * 1000
    const time3 =
      results[3].length === 2 ? Number(results[3]) * 10 : Number(results[3])
    const time = time1 + time2 + time3

    // 3.获取每一组的文本
    const text = line.replace(timeRegExp, '')

    lyrics.push({ time, text })
  }
  return lyrics
}
