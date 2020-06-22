import { SomeUtils } from './SomeUtils'
import 'jest'

describe('SomeUtils', () => {
  test('should do something', () => {
    const util = new SomeUtils()
    expect(util.doSomething()).toEqual('this is something')
  })
})
