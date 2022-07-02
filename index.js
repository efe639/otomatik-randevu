const moment = require("moment");
moment.locale("tr")
const getAuth = require("./functions/auth/auth");
const randevuGecmisi = require("./functions/randevu/gecmis");
const randevuAl = require("./functions/randevu/randevu");
const searchRandevu = require("./functions/search/search");
const sorguHekim = require("./functions/sorgu/sorgu");

const kliniks = [
   {
      "value": 106,
      "text": "Aile Hekimliği",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 112,
      "text": "Beyin ve Sinir Cerrahisi",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 116,
      "text": "Çocuk Cerrahisi",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 132,
      "text": "Çocuk Sağlığı ve Hastalıkları",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 134,
      "text": "Çocuk ve Ergen Ruh Sağlığı ve Hastalıkları",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 136,
      "text": "Deri ve Zührevi Hastalıkları (Cildiye)",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 198,
      "text": "Diş Hekimliği (Genel Diş)",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 140,
      "text": "Enfeksiyon Hastalıkları ve Klinik Mikrobiyoloji",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 142,
      "text": "Fiziksel Tıp ve Rehabilitasyon",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 144,
      "text": "Gastroenteroloji",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 147,
      "text": "Genel Cerrahi",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 149,
      "text": "Göğüs Cerrahisi",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 150,
      "text": "Göğüs Hastalıkları",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 151,
      "text": "Göz Hastalıkları",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 155,
      "text": "Hematoloji",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 157,
      "text": "İç Hastalıkları (Dahiliye)",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 161,
      "text": "Kadın Hastalıkları ve Doğum",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 162,
      "text": "Kalp ve Damar Cerrahisi",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 163,
      "text": "Kardiyoloji",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 165,
      "text": "Kulak Burun Boğaz Hastalıkları",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 166,
      "text": "Nefroloji",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 168,
      "text": "Nöroloji",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 171,
      "text": "Ortopedi ve Travmatoloji",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 175,
      "text": "Plastik, Rekonstrüktif ve Estetik Cerrahi",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 177,
      "text": "Radyasyon Onkolojisi",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 180,
      "text": "Romatoloji",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 181,
      "text": "Ruh Sağlığı ve Hastalıkları (Psikiyatri)",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 210,
      "text": "Sağlık Kurulu",
      "children": [],
      "value2": 0,
      "value3": 2,
      "text2": "",
      "favori": false
   },
   {
      "value": 211,
      "text": "Sağlık Kurulu ÇÖZGER (Çocuk Özel Gereksinim Raporu)",
      "children": [],
      "value2": 0,
      "value3": 2,
      "text2": "",
      "favori": false
   },
   {
      "value": 192,
      "text": "Tıbbi Onkoloji",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   },
   {
      "value": 196,
      "text": "Üroloji",
      "children": [],
      "value2": 0,
      "value3": 1,
      "text2": "",
      "favori": false
   }
]


const users = [
   {
      tc: 0, // type number
      password: "pass", // type string
      cinsiyet: "E", // E or F type string
      plaka: 34, // type number
      klinik: 151, // type number
      istenenCinsiyet: "E" // E erkek, F kadın type string
   }
]


setInterval(() => {

   users.map(user => {
      getAuth({
         kimlikno: user.tc,
         password: user.password
      }).then(token => {
         const newtoken = String("Bearer " + token.split('"')[1])
         randevuGecmisi({ token: newtoken }).then(gecmis => {
            const randevu = gecmis.aktifRandevuDtoList.filter(a => a.mhrsKlinikAdi === kliniks.find(a => a.value === user.klinik).text)
            if (randevu.length <= 0) {
               const date = moment().format('YYYY-MM-DD HH:mm:ss')
               searchRandevu({
                  cinsiyet: user.cinsiyet,
                  plaka: user.plaka,
                  klinikId: user.klinik,
                  baslangic: String(moment().format('YYYY-MM-DD HH:MM:SS')),
                  bitis: String(moment().format(`YYYY-MM-${String(date.split("-")[2].slice(0, 2) * 1 + 15)} HH:mm:ss`)),
                  token: newtoken,
               }).then(veri => {
                  sorguHekim({
                     hekimId: veri.hekimId,
                     kurumId: veri.kurumId,
                     token: newtoken,
                     cinsiyet: user.cinsiyet,
                     plaka: user.plaka,
                     klinikId: user.klinik
                  }).then(veri => {
                     if (user.istenenCinsiyet) {
                        const kullanılabilirhekim = veri.filter(hekim => hekim.kalanKullanim > 0)
                        const secilen = kullanılabilirhekim.filter(hekim => hekim.hekimSlotList[0].hekim.cinsiyet.val === user.istenenCinsiyet)
                        if (secilen.length > 0) {
                           const saatler = secilen[0].hekimSlotList[0].muayeneYeriSlotList[0].saatSlotList.filter(saat => saat.bos === true)
                           const slotList = []
                           saatler.map(saat => {
                              saat.slotList.map(a => slotList.push(a))
                           })

                           const alinabilir = slotList.filter(a => a.bos === true)

                           randevuAl({
                              fkSlotId: alinabilir[0].slot.id,
                              fkCetvelId: alinabilir[0].slot.fkCetvelId,
                              baslangicZamani: alinabilir[0].slot.baslangicZamani,
                              bitisZamani: alinabilir[0].slot.bitisZamani,
                              token: newtoken
                           }).then(console.log)


                        } else {
                           console.log("istenilen cinsiyete göre hekim bulunamadı")
                        }
                     } else {
                        const kullanılabilirhekim = veri.filter(hekim => hekim.kalanKullanim > 0)
                        if (kullanılabilirhekim.length > 0) {
                           const saatler = kullanılabilirhekim[0].hekimSlotList[0].muayeneYeriSlotList[0].saatSlotList.filter(saat => saat.bos === true)
                           const slotList = []
                           saatler.map(saat => {
                              saat.slotList.map(a => slotList.push(a))
                           })

                           const alinabilir = slotList.filter(a => a.bos === true)

                           randevuAl({
                              fkSlotId: alinabilir[0].slot.id,
                              fkCetvelId: alinabilir[0].slot.fkCetvelId,
                              baslangicZamani: alinabilir[0].slot.baslangicZamani,
                              bitisZamani: alinabilir[0].slot.bitisZamani,
                              token: newtoken
                           }).then(console.log)

                        } else {
                           console.log("kullanılabilecek hekim yok")
                        }
                     }
                  })
               })
            } else {
               console.log("randevu var")
            }
         })
      })
   })
}, 3600000) // 3600000 ms = 1 hour