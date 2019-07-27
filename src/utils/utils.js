import moment from 'moment'
import config from '../../data/SiteConfig'

const dateFromFormat = date => moment.utc(date).format(config.dateFormat);

export { dateFromFormat }