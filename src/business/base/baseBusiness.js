import { NotImplementedException } from '../../utils/exceptions.js'

export class BaseBusiness {
  _validateRequiredFields(data) {
    throw new NotImplementedException(this._validateRequiredFields.name)
  }

  _create(data) {
    throw new NotImplementedException(this._create.name)
  }

  create(data) {
    const isValid = this._validateeRequiredFields(data)

    if (!isValid) throw new Error('Invalid data')

    this.create(data)
  }
}
