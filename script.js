const WA = "6281234567890"; // GANTI NOMOR WA

// CARA GANTI FOTO & DESKRIPSI: EDIT DI SINI
// img = nama file foto, desc = deskripsi panjang pas di-klik
const products = {
  artprint: [
    {id:1, name:"Yae Miko Kimono", sub:"A5 - Giấy ảnh nhũ", price:"45k", tags:["Genshin","A5","New"], badge:"New", img:"https://picsum.photos/seed/art0/400/600", desc:"Artprint Yae Miko versi kimono musim dingin. Paper luster nhũ glitter, warna soft pastel.\n\nSize: A5 (14.8x21cm)\nFinish: Giấy ảnh nhũ\nStock: Ready\n\nNote: Warna asli lebih glitter dari foto."},
    {id:2, name:"Yae Miko Fox", price:"45k", sub:"A5", tags:["Genshin"], img:"https://picsum.photos/seed/art1/400/600", desc:"Yae Miko fox form, background sakura night."},
    {id:3, name:"Navia - Fontaine", price:"45k", sub:"A5", tags:["Genshin"], img:"https://picsum.photos/seed/art2/400/600", desc:"Navia dengan payung Fontaine."},
    {id:4, name:"Robin Winter Sky", price:"45k", sub:"A5", tags:["HSR","Robin","Popular"], badge:"Popular", img:"https://picsum.photos/seed/art3/400/600", desc:"Best seller! Robin versi winter sky, tone biru putih."},
    {id:5, name:"Robin Concert", price:"45k", sub:"A5", tags:["HSR"], badge:"New", img:"https://picsum.photos/seed/art4/400/600", desc:"Robin concert dress, efek cahaya baru."},
    {id:6, name:"Robin Purple", price:"45k", sub:"A5", tags:["HSR"], img:"https://picsum.photos/seed/art5/400/600", desc:"Robin dark purple, untuk pairing sama ticket."},
    {id:7, name:"Jingliu Ice", price:"45k", sub:"A5", tags:["HSR"], img:"https://picsum.photos/seed/art6/400/600", desc:"Jingliu ice field."},
    {id:8, name:"Himeko & Robin", price:"45k", sub:"A5", tags:["HSR"], img:"https://picsum.photos/seed/art7/400/600", desc:"Duo Himeko & Robin."},
    {id:9, name:"Robin Snow", price:"45k", sub:"A5", tags:["HSR"], badge:"New", img:"https://picsum.photos/seed/art8/400/600", desc:"Robin snow version WIP final."},
  ],
  ticket: [
    {name:"Ticket Robin Winter - Trước", price:"40k", sub:"7x14cm - Giấy ảnh nhũ", tags:["Ticket","Robin"], img:"https://picsum.photos/seed/ticket/400/600", desc:"Ticket Robin Winter 2 sisi. Sisi depan ilustrasi Robin winter. Bahan giấy ảnh nhũ tebal, bisa dipakai sebagai bookmark."},
    {name:"Ticket Robin Winter - Sau", price:"40k", sub:"7x14cm", tags:["Ticket"], img:"https://picsum.photos/seed/ticket2/400/600", desc:"Sisi belakang ada lettering & signature Robin."},
  ],
  polaroid: [
    {name:"Polaroid Yae", price:"30k", sub:"6x9cm", tags:["Polaroid"], img:"https://picsum.photos/seed/pol0/200/300", desc:"Polaroid mini, bisa ditempel di binder."},
    {name:"Polaroid Robin", price:"30k", sub:"6x9cm", tags:["Polaroid"], img:"https://picsum.photos/seed/pol1/200/300", desc:"Robin winter polaroid."},
  ],
  gacha: [
    {name:"Aventurine SSR", price:"30k / 150k (1 pick)", sub:"Bo Góc HSR GACHA", tags:["GACHA","SSR","Holo"], badge:"SSR", img:"https://picsum.photos/seed/h1/400/600", desc:"Card bo góc gacha. Rate SSR 30%. SSR dapat Holo. Tidak ada bảo hiểm."},
    {name:"Sunday", price:"30k", sub:"Bo Góc", tags:["GACHA"], img:"https://picsum.photos/seed/h2/400/600", desc:"Sunday normal."},
    {name:"Mydei WIP", price:"30k", sub:"Bo Góc", tags:["WIP"], img:"https://picsum.photos/seed/h3/400/600", desc:"Mydei masih WIP, akan update sebelum fes."},
    {name:"Castorice WIP", price:"30k", sub:"Bo Góc", tags:["WIP"], img:"https://picsum.photos/seed/h4/400/600", desc:"Castorice WIP."},
  ],
  frieren: [{name:"Frieren Journey", price:"45k", sub:"A5", tags:["Frieren"], img:"https://picsum.photos/seed/fri0/400/600", desc:"Frieren artprint - perjalanan."},{name:"Frieren Sunset", price:"45k", sub:"A5", tags:["Frieren"], img:"https://picsum.photos/seed/fri1/400/600", desc:"Frieren sunset field."}],
  miku: [{name:"Miku Winter", price:"30k", sub:"6x9cm Cán kim tuyến", tags:["Vocaloid"], img:"https://picsum.photos/seed/miku0/400/600", desc:"Miku winter, kim tuyến glitter."},{name:"Rin Winter", price:"30k", sub:"6x9cm", tags:["Vocaloid"], img:"https://picsum.photos/seed/miku1/400/600", desc:"Rin winter pairing Miku."}],
};

function renderGrid(id, list){
  const el = document.getElementById(id);
  if(!el) return;
  el.innerHTML = list.map((p,i)=>`<div class="item" onclick="openDetail('${id}',${i})"><img src="${p.img}" loading="lazy"></div>`).join('');
}
renderGrid("artprint-grid", products.artprint);
renderGrid("ticket-grid", products.ticket);
renderGrid("polaroid-grid", products.polaroid);
renderGrid("gacha-grid", products.gacha);
renderGrid("pick-grid", products.gacha);
renderGrid("frieren-grid", products.frieren);
renderGrid("miku-grid", products.miku);
document.getElementById("sticker-grid").innerHTML = `<div class="item" onclick="openDetail('sticker',0)"><img src="https://picsum.photos/seed/sticker/200/200"></div>`;
document.getElementById("standee-grid").innerHTML = `<div class="item" onclick="openDetail('standee',0)"><img src="https://picsum.photos/seed/standee/200/200"></div>`;

let current = null;
function openDetail(group, index){
  let p;
  if(group==='sticker') p = {name:"Sticker Genshin Chibi", price:"1 for 5k / 6 for 30k", sub:"5cm", tags:["Sticker"], img:"https://picsum.photos/seed/sticker/400/400", desc:"Sticker chibi Genshin 5cm, 1 pack bisa pilih 6 char. Full set 55k."};
  else if(group==='standee') p = {name:"Standee Gacha Chibi", price:"1 for 50k", sub:"5cm Double Board", tags:["Standee"], img:"https://picsum.photos/seed/standee/400/400", desc:"Standee chibi double board, đế hoa anh đào. Pick 1 for 65k, buy 5 pick 1."};
  else p = products[group.replace('-grid','')][index] || products.artprint[index];

  current = p;
  document.getElementById("m-img").src = p.img;
  document.getElementById("m-name").innerText = p.name;
  document.getElementById("m-sub").innerText = p.sub || "";
  document.getElementById("m-price").innerText = p.price ? `${p.price}` : "";
  document.getElementById("m-desc").innerText = p.desc || "Tidak ada deskripsi.";
  document.getElementById("m-tags").innerHTML = (p.tags||[]).map(t=>`<span>${t}</span>`).join('');
  document.getElementById("m-badge").innerText = p.badge || "";
  document.getElementById("modal").classList.add("show");
}
function closeModal(){document.getElementById("modal").classList.remove("show")}
function orderWA(){
  if(!current) return;
  const text = `Halo kak! Mau order di TABLE A13-14%0A%0A*${current.name}*%0A${current.price}%0A${current.sub}%0A%0ADeskripsi: ${current.desc}`;
  window.open(`https://wa.me/${WA}?text=${encodeURIComponent(text)}`,'_blank');
}
document.getElementById("modal").addEventListener("click", e=>{ if(e.target.id==="modal") closeModal() });