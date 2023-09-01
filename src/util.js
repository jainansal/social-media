import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.extend(relativeTime)

const timeFromNow = (date) => {
  return dayjs(date).fromNow()
}

export default {
  timeFromNow
}
