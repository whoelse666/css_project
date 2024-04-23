async function download() {
    let url = fileUrl.value
    let response = await fetch(url)
    let file = await response.blob()
    let link = document.createElement("a")
    link.href = URL.createObjectURL(file)
    link.download = `文件${new Date()}`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(link.href)
}
btn.onclick = download