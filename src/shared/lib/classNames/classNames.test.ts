import { classNames } from './classNames'

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass')
  })

  test('with additional params', () => {
    const expectedString = 'someClass class1 class2'

    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(
      expectedString
    )
  })

  test('with mods', () => {
    const expectedString = 'someClass hovered scrollable class1 class2'

    expect(
      classNames('someClass', { hovered: true, scrollable: true }, [
        'class1',
        'class2'
      ])
    ).toBe(expectedString)
  })

  test('with false mod', () => {
    const expectedString = 'someClass hovered class1 class2'

    expect(
      classNames('someClass', { hovered: true, scrollable: false }, [
        'class1',
        'class2'
      ])
    ).toBe(expectedString)
  })
})
