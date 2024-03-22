function validateForm() {
    let formDataDiri = document.forms["form_data_diri"];

    let nama = formDataDiri["nama"].value;
    if (nama == "") {
        alert("Nama masih kosong");
        return false;
    }

    let no_hp = formDataDiri["no_hp"].value;
    if (no_hp == "") {
        alert("No HP masih kosong");
        return false;
    } else if (no_hp.length < 10) {
        alert("NO HP tidak valid");
        return false;
    }
    
    let jenis_kelamin = formDataDiri["jenis_kelamin"].value;
    if (jenis_kelamin == "") {
        alert("Jenis kelamin masih kosong");
        return false;
    }

    let tgl_lahir = formDataDiri["tgl_lahir"].value;
    if (tgl_lahir == "") {
        alert("Tanggal Lahir masih kosong");
        return false;
    }
}