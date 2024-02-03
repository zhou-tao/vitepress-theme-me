import dayjs from 'dayjs'

interface Item {
  time: string
  [k: string]: any
}

interface Result {
  _idx: number
  key: string
  records: any
}

export function formatTime(time: string) {
  return dayjs(time).format('YYYY-MM-DD')
}

export function groupByTime(records: Item[]): Result[] {
  const result: Result[] = []
  const timeMap = new Map()
  if (records.some(r => !r.time)) return [{ _idx: 0, key: '', records }] // not need group
  const getTimestamp = (time: string) => dayjs(time).unix()
  const sortedRecords = records.slice().sort((a, b) => getTimestamp(b.time) - getTimestamp(a.time))
  for (const item of sortedRecords) {
    const year = dayjs(item.time).year()
    if (timeMap.has(year)) {
      timeMap.get(year).push(item)
    }
    else {
      timeMap.set(year, [item])
    }
  }
  let idx = 0
  for (const [year, records] of timeMap) {
    result.push({ _idx: ++idx, key: year, records: records.map(v => ({ ...v, time: dayjs(v.time).format('MM/DD'), _idx: ++idx })) })
  }
  return result
}
