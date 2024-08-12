type UnknownArrayOrObject = unknown[] | Record<string, unknown>

export const getDirtyValues = (
  dirtyFields: UnknownArrayOrObject | boolean,
  allValues: UnknownArrayOrObject
): UnknownArrayOrObject => {
  // NOTE: Recursive function.

  // If *any* item in an array was modified, the entire array must be submitted, because there's no
  // way to indicate "placeholders" for unchanged elements. `dirtyFields` is `true` for leaves.
  if (dirtyFields === true || Array.isArray(dirtyFields)) {
    return allValues
  }

  // Here, we have an object.
  return Object.fromEntries(
    Object.keys(dirtyFields).map((key) => [
      key,
      // @ts-expect-error
      getDirtyValues(dirtyFields[key], allValues[key]),
    ])
  )
}
