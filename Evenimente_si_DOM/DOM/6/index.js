const apiUrl = 'http://localhost:8000/api/'

// --- Funcții AJAX generale ---
async function get(url) {
  return (await axios.get(url)).data
}

async function post(url, body) {
  return (await axios.post(url, JSON.stringify(body), {
    headers: { 'Content-Type': 'application/json' }
  })).data
}

// --- Încarcă tabelul cu toate datele ---
async function loadTable() {
  let data = await get(apiUrl + "getList")
  let tableDiv = document.getElementById('tableData')

  if (!data || !tableDiv) return

  let html = []
  html.push("<table id='myTable' border='1' cellspacing='0' cellpadding='6'>")
  html.push('<thead>')
  html.push('<tr><th>ID</th><th>Nume</th><th>Vârstă</th></tr>')
  html.push('</thead><tbody>')

  for (let item of data) {
    html.push(`<tr>
      <td>${item.id}</td>
      <td>${item.name}</td>
      <td>${item.age}</td>
    </tr>`)
  }

  html.push('</tbody></table>')
  tableDiv.innerHTML = html.join("")
}

// --- Trimite un nou contact (POST) ---
async function sendData() {
  let name = document.getElementById('inputName').value
  let age = document.getElementById('inputAge').value

  if (!name || !age) {
    alert('Trebuie completate ambele câmpuri!')
    return
  }

  await post(apiUrl + "postList", { name, age })
  await loadTable()
}

// --- Caută o persoană după ID (GET) ---
async function getById() {
  let id = document.getElementById('inputId').value
  let resultDiv = document.getElementById('resultById')

  if (!id) {
    alert('Introdu un ID!')
    return
  }

  try {
    let data = await get(apiUrl + "getById/" + id)
    resultDiv.innerHTML = `
      <p><strong>Rezultat:</strong></p>
      <p>ID: ${data.id}</p>
      <p>Nume: ${data.name}</p>
      <p>Vârstă: ${data.age}</p>
    `
  } catch (error) {
    resultDiv.innerHTML = `<p style="color:red;">Resursa cu id=${id} nu a fost găsită.</p>`
  }
}

// --- Încarcă automat tabelul la pornire ---
loadTable()
