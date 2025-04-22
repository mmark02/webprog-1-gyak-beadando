document.getElementById("kapcsolat").addEventListener('submit', function(e){
    e.preventDefault();

    let nev = document.getElementById('nev').value;
    let email = document.getElementById('email').value;
    let jatek = document.getElementById('jatek').value;
    let uzenet = document.getElementById('uzenet').value;
    let orszag = document.getElementById('orszag').value;

    let ujValasz = {nev, email, jatek, uzenet, orszag};
    let eddigiValaszok = JSON.parse(localStorage.getItem('valaszok')) || [];
    eddigiValaszok.push(ujValasz);
    localStorage.setItem('valaszok', JSON.stringify(eddigiValaszok));

    alert("Válaszai rögzítésre kerültek!");
    this.reset();
});

document.getElementById("megjelenit").addEventListener('click', function(){
    let valaszok = JSON.parse(localStorage.getItem('valaszok')) || [];
    let tarolo = document.getElementById('valaszokDiv');

    if (valaszok.length === 0) {
        tarolo.innerHTML = "<p>Nincsenek elmentett válaszok.</p>";
        return;
    }

    tarolo.innerHTML = "<h2 class='cim'>Elmentett válaszok</h2>" + valaszok.map((v, i) => `
        <p>#${i+1}</p>
        <p>Név: ${v.nev}</p>
        <p>Email: ${v.email}</p>
        <p>Játék: ${v.jatek}</p>
        <p>Üzenet: ${v.uzenet}</p>
        <p>Ország: ${v.orszag}</p>
    `).join("");
});

document.getElementById("torol").addEventListener('click', function(){
    localStorage.removeItem('valaszok');
    alert("Az elmentett válaszok törölve lettek");
});