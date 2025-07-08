export const getInstruments = async () => {
  const res = await fetch(
    'https://watch-list-038bbf46a7ed.herokuapp.com/instruments',
    {
      next: { revalidate: 120 },
    }
  )

  if (!res.ok) {
    return { success: false, message: 'Failed to fetch' }
  }

  const data = await res.json()

  return { success: true, data }
}
