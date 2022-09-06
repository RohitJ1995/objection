const {Model} = require('objection')

class Video extends Model {
	static get tableName() {
		return 'video'
	}

	static get relationMappings() {
		const Channel = require('./channel')
		return {
			channel: {
				relation: Model.HasOneRelation,
				modelClass: Channel,
				join: {
					from: 'video.channelId',
					to: 'channel.id'
				}
			}
		}
	}
}

module.exports = Video;