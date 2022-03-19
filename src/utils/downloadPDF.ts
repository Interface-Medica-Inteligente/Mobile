export const downloadPDF = (pdf, name) => {
  const linkSource = `data:application/pdf;base64,${pdf}`
  const downloadLink = document.createElement('a')
  const fileName = `${name}.pdf`

  downloadLink.href = linkSource
  downloadLink.download = fileName
  downloadLink.click()
}
