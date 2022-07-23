   /*
  Created By Riy
  Base Ori : DikaArdnt
  Kalau Mau Nambahin Fitur Di › index.js
  Ganti Owner Di › settings.js
  */

  // Menu
  exports.menu = (botname, pushname, salam) => {
  return `Selamat ${salam} kak ${pushname}
  
  
  
  
  Hai kak ☺️ 
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi
Berapapun donasi kalian akan sangat berarti 👍
*DONASI PULSA=62 838-4540-9710*

Jangan lupa Save Nomer owner aku yah🙃
nih kak nomer owner aku wa.me/6283845409710
  `
  }

  // List
  exports.list = (pushname) => {
  return `Halo kak ${pushname}, silahkan dipilih list menu dibawah ini
  `
  }

  // All Menu
  exports.allmenu = (prefix, pushname, botname, time, salam) => {
  return `  _Selamat ${salam} kak ${pushname}_
  
  *Bot Info*
   ${prefix}ping
   ${prefix}runtime
   ${prefix}speed
   ${prefix}owner
   ${prefix}menu
   ${prefix}delete
   ${prefix}infochat
   ${prefix}quoted
   ${prefix}listpc
   ${prefix}listgc

  *Owner Menu*
   ${prefix}react [emoji]
   ${prefix}chat [option]
   ${prefix}join [link]
   ${prefix}leave
   ${prefix}block @user
   ${prefix}unblock @user
   ${prefix}bcgroup 
   ${prefix}bcall 
   ${prefix}setppbot  
   ${prefix}setexif
   ${prefix}setmenu
   ${prefix}setallmenu
   ${prefix}autoreact [on/off]
  
  *Group Menu*
   ${prefix}linkgroup
   ${prefix}ephemeral [option]
   ${prefix}setppgc
   ${prefix}setname 
   ${prefix}setdesc 
   ${prefix}group [option]
   ${prefix}editinfo [option]
   ${prefix}add @user
   ${prefix}kick @user
   ${prefix}listonline
   ${prefix}hidetag 
   ${prefix}tagall 
   ${prefix}antilink [on/off]
   ${prefix}nsfw [on/off]
   ${prefix}mute [on/off]
   ${prefix}promote @user
   ${prefix}demote @user
   ${prefix}absen
   ${prefix}hadir
   ${prefix}tidakhadir
   ${prefix}cekabsen
   ${prefix}hapusabsen
  
  *Database Menu*
   ${prefix}setcmd
   ${prefix}listcmd
   ${prefix}delcmd
   ${prefix}lockcmd
   ${prefix}addmsg
   ${prefix}listmsg
   ${prefix}getmsg
   ${prefix}delmsg

  *Search Menu*
   ${prefix}play 
   ${prefix}yts 
   ${prefix}google 
   ${prefix}gimage 
   ${prefix}pinterest 
   ${prefix}wikimedia 
   ${prefix}ytsearch 
   ${prefix}githubstalk
   ${prefix}igstalk
   ${prefix}ringtone 
  
  *Downloader Menu*
   ${prefix}tiktok [url]
   ${prefix}tiktokwm [url]
   ${prefix}tiktoknowm [url]
   ${prefix}tiktokaudio [url]
   ${prefix}instagram [url]
   ${prefix}twitter [url]
   ${prefix}facebook [url]
   ${prefix}ytmp4 [url]
   ${prefix}ytmp3 [url]
   ${prefix}play [judul]
   ${prefix}ytsearch [judul]
   ${prefix}gitclone

  *Converter Menu*
   ${prefix}toimage
   ${prefix}removebg
   ${prefix}sticker
   ${prefix}setwm
   ${prefix}emojimix
   ${prefix}tovideo
   ${prefix}togif
   ${prefix}tourl
   ${prefix}tovn
   ${prefix}tomp3
   ${prefix}toaudio
   ${prefix}ebinary
   ${prefix}dbinary
   ${prefix}styletext
   ${prefix}smeme
   ${prefix}semoji
   ${prefix}nulisbiasa
   ${prefix}nuliskanan
   ${prefix}nuliskiri
   ${prefix}foliokanan
   ${prefix}foliokiri

  *Textpro Menu*
   ${prefix}serti1 [teks]
   ${prefix}serti2 [teks]
   ${prefix}serti3 [teks]
   ${prefix}blackpink [teks]
   ${prefix}neon [teks]
   ${prefix}magma [teks]
   ${prefix}3dstone [teks]
   ${prefix}halloween [teks]
   ${prefix}horror [teks]
   ${prefix}larva [teks]
   ${prefix}toxic [teks]
   ${prefix}marvel [teks|teks]
   ${prefix}potter [teks]
   ${prefix}pornhub [teks|teks]

  *Photooxy Menu*
   ${prefix}3d-underwater  
   ${prefix}3dtext-pig  
   ${prefix}3dvalentine-cards  
   ${prefix}anonymous-neon  
   ${prefix}advanced-glow  
   ${prefix}art-shader  
   ${prefix}angels-wings 

  *Ephoto Menu*
   ${prefix}3dnature
   ${prefix}bevel
   ${prefix}burnpaper
   ${prefix}quotesgrass
   ${prefix}stars
   ${prefix}flaming
   ${prefix}romance
   ${prefix}gerbang
   ${prefix}fur
   ${prefix}funnycup
  
  *Anime Menu*
   ${prefix}loli
   ${prefix}neko
   ${prefix}waifu
   ${prefix}shinobu
   ${prefix}megumin
   ${prefix}bully
   ${prefix}cuddle
   ${prefix}cry
   ${prefix}hug
   ${prefix}awoo
   ${prefix}kiss
   ${prefix}lick
   ${prefix}pat
   ${prefix}smug
   ${prefix}bonk
   ${prefix}yeet
   ${prefix}blush
   ${prefix}smile
   ${prefix}wave
   ${prefix}highfive
   ${prefix}handhold
   ${prefix}nom
   ${prefix}bite
   ${prefix}glomp
   ${prefix}slap
   ${prefix}kill
   ${prefix}happy
   ${prefix}wink
   ${prefix}poke
   ${prefix}dance
   ${prefix}cringe
   ${prefix}anime
   ${prefix}yotsuba
   ${prefix}shinomiya
   ${prefix}yumeko
   ${prefix}tejina
   ${prefix}chiho
   ${prefix}toukachan
   ${prefix}akira
   ${prefix}itori
   ${prefix}kurumi
   ${prefix}miku
   ${prefix}pokemon
   ${prefix}ryujin
   ${prefix}kaori
   ${prefix}shizuka
   ${prefix}kotori
   ${prefix}kaga
   ${prefix}mikasa
   ${prefix}akiyama
   ${prefix}gremory
   ${prefix}isuzu
   ${prefix}cosplay
   ${prefix}shina
   ${prefix}kagura
   ${prefix}shinka
   ${prefix}eba
   ${prefix}deidara
   ${prefix}itachi
   ${prefix}madara
   ${prefix}yuki
   ${prefix}asuna
   ${prefix}ayuzawa
   ${prefix}chitoge
   ${prefix}emilia
   ${prefix}hestia
   ${prefix}inori
   ${prefix}ana
   ${prefix}boruto
   ${prefix}erza
   ${prefix}kakasih
   ${prefix}sagiri
   ${prefix}minato
   ${prefix}naruto
   ${prefix}nezuko
   ${prefix}onepiece
   ${prefix}sakura
   ${prefix}sasuke
   ${prefix}tsunade
   ${prefix}jhota
   ${prefix}hinata

  *Nsfw Menu*
   ${prefix}ahegeo
   ${prefix}ass
   ${prefix}bdsm
   ${prefix}blowjob
   ${prefix}cuckold 
   ${prefix}cum 
   ${prefix}ero
   ${prefix}femdom
   ${prefix}foot
   ${prefix}gangbang
   ${prefix}glasses
   ${prefix}hentai
   ${prefix}ahy
   ${prefix}mstb
   ${prefix}neko
   ${prefix}orgy
   ${prefix}panties
   ${prefix}pussy
   ${prefix}yuri
   ${prefix}zettai
  
  *Game Menu*
   ${prefix}tictactoe [nama room]
   ${prefix}delttt
   ${prefix}tebak [option]
   ${prefix}math [mode]
   ${prefix}suitpvp [@tag]
   ${prefix}suit2
   ${prefix}aduayam

  *Fun Menu*
   ${prefix}bagaimanakah
   ${prefix}kapankah
   ${prefix}apakah
   ${prefix}bisakah
   ${prefix}rate
   ${prefix}wangy
   ${prefix}gantengcek
   ${prefix}cekganteng
   ${prefix}cantikcek
   ${prefix}cekcantik
   ${prefix}sangecek
   ${prefix}ceksange
   ${prefix}gaycek
   ${prefix}cekgay
   ${prefix}lesbicek
   ${prefix}halah
   ${prefix}hilih
   ${prefix}huluh
   ${prefix}heleh
   ${prefix}holoh
   ${prefix}jadian
   ${prefix}jodohku
   ${prefix}truth
   ${prefix}dare

  *Primbon Menu*
   ${prefix}nomorhoki
   ${prefix}artimimpi
   ${prefix}artinama
   ${prefix}ramaljodoh
   ${prefix}ramaljodohbali
   ${prefix}suamiistri
   ${prefix}ramalcinta
   ${prefix}cocoknama
   ${prefix}pasangan
   ${prefix}jadiannikah
   ${prefix}sifatusaha
   ${prefix}rezeki
   ${prefix}pekerjaan
   ${prefix}nasib
   ${prefix}penyakit
   ${prefix}tarot
   ${prefix}fengshui
   ${prefix}haribaik
   ${prefix}harisangar
   ${prefix}harisial
   ${prefix}nagahari
   ${prefix}arahrezeki
   ${prefix}peruntungan
   ${prefix}weton
   ${prefix}karakter
   ${prefix}keberuntungan
   ${prefix}memancing
   ${prefix}masasubur
   ${prefix}zodiak
   ${prefix}shio

  *Cerpen Menu*
   ${prefix}cerpen anak
   ${prefix}cerpen bahasa daerah
   ${prefix}cerpen bahasa inggris
   ${prefix}cerpen bahasa jawa
   ${prefix}cerpen bahasa sunda
   ${prefix}cerpen budaya
   ${prefix}cerpen cinta
   ${prefix}cerpen cinta islami
   ${prefix}cerpen cinta pertama
   ${prefix}cerpen cinta romantis
   ${prefix}cerpen cinta sedih
   ${prefix}cerpen cinta segitiga
   ${prefix}cerpen cinta sejati
   ${prefix}cerpen galau
   ${prefix}cerpen gokil
   ${prefix}cerpen inspiratif
   ${prefix}cerpen jepang
   ${prefix}cerpen kehidupan
   ${prefix}cerpen keluarga
   ${prefix}cerpen kisah nyata
   ${prefix}cerpen korea
   ${prefix}cerpen kristen
   ${prefix}cerpen liburan
   ${prefix}cerpen lingkungan
   ${prefix}cerpen lucu
   ${prefix}cerpen malaysia
   ${prefix}cerpen mengharukan
   ${prefix}cerpen misteri
   ${prefix}cerpen motivasi
   ${prefix}cerpen nasihat
   ${prefix}cerpen nasionalisme
   ${prefix}cerpen olahraga
   ${prefix}cerpen patah hati
   ${prefix}cerpen penantian
   ${prefix}cerpen pendidikan
   ${prefix}cerpen pengalaman pribadi
   ${prefix}cerpen pengorbanan
   ${prefix}cerpen penyesalan
   ${prefix}cerpen perjuangan
   ${prefix}cerpen perpisahan
   ${prefix}cerpen persahabatan
   ${prefix}cerpen petualangan
   ${prefix}cerpen ramadhan
   ${prefix}cerpen remaja
   ${prefix}cerpen renungan
   ${prefix}cerpen rindu
   ${prefix}cerpen rohani
   ${prefix}cerpen romantis
   ${prefix}cerpen sastra
   ${prefix}cerpen sedih
   ${prefix}cerpen sejarah
   ${prefix}cerpen slice of life
   ${prefix}cerpen terjemahan
   ${prefix}cerpen thriller

  *Information Menu*
   ${prefix}merdeka-news 
   ${prefix}kontan-news 
   ${prefix}cnbc-news 
   ${prefix}tribun-news 
   ${prefix}indozone-news 
   ${prefix}kompas-news 
   ${prefix}detik-news 
   ${prefix}daily-news 
   ${prefix}inews-news 
   ${prefix}okezone-news 
   ${prefix}sindo-news 
   ${prefix}tempo-news 
   ${prefix}antara-news 
   ${prefix}cnn-news 
   ${prefix}fajar-news 
   ${prefix}infogempa
   ${prefix}infocovid
   ${prefix}faktaunik

  *Cecan Menu*
   ${prefix}china
   ${prefix}vietnam
   ${prefix}thailand
   ${prefix}indonesia
   ${prefix}korea
   ${prefix}japan
   ${prefix}malaysia
  
  *Asupan Menu*
   ${prefix}hijaber
   ${prefix}cecan
   ${prefix}bocil
   ${prefix}ukhty
   ${prefix}gheayubi
   ${prefix}rikagusriani
   ${prefix}santuy
  
  *Islamic Menu*
   ${prefix}iqra
   ${prefix}hadist
   ${prefix}alquran
   ${prefix}juzamma
   ${prefix}tafsirsurah

  *Sound Menu*
   ${prefix}sound1
   ${prefix}sound2
   ${prefix}sound3
   ${prefix}sound4
   ${prefix}sound5
   ${prefix}sound6
   ${prefix}sound7
   ${prefix}sound8
   ${prefix}sound9
   ${prefix}sound10
   ${prefix}sound11
   ${prefix}sound12
   ${prefix}sound13
   ${prefix}sound14
   ${prefix}sound15
   ${prefix}sound16
   ${prefix}sound17
   ${prefix}sound18
   ${prefix}sound19
   ${prefix}sound20
   ${prefix}sound21
   ${prefix}sound22
   ${prefix}sound23
   ${prefix}sound24
   ${prefix}sound25
   ${prefix}sound26
   ${prefix}sound27
   ${prefix}sound28
   ${prefix}sound29
   ${prefix}sound30
   ${prefix}sound31
   ${prefix}sound32
   ${prefix}sound33
   ${prefix}sound34
   ${prefix}sound35
   ${prefix}sound36
   ${prefix}sound37
   ${prefix}sound38
   ${prefix}sound39
   ${prefix}sound40
   ${prefix}sound41
   ${prefix}sound42
   ${prefix}sound43
   ${prefix}sound44
   ${prefix}sound45
   ${prefix}sound46
   ${prefix}sound47
   ${prefix}sound48
   ${prefix}sound49
   ${prefix}sound50
   ${prefix}sound51
   ${prefix}sound52
   ${prefix}sound53
   ${prefix}sound54
   ${prefix}sound55
   ${prefix}sound56
   ${prefix}sound57
   ${prefix}sound58
   ${prefix}sound59
   ${prefix}sound60
   ${prefix}sound61
   ${prefix}sound62
   ${prefix}sound63
   ${prefix}sound64
   ${prefix}sound65
   ${prefix}sound66
   ${prefix}sound67
   ${prefix}sound68
   ${prefix}sound69
   ${prefix}sound70
   ${prefix}sound71
   ${prefix}sound72
   ${prefix}sound73
   ${prefix}sound74
  
  *Voice Changer*
   ${prefix}bass
   ${prefix}blown
   ${prefix}deep
   ${prefix}earrape
   ${prefix}fast
   ${prefix}fat
   ${prefix}nightcore
   ${prefix}reverse
   ${prefix}robot
   ${prefix}slow
   ${prefix}tupai

  *Telegram Sticker*
   ${prefix}gurastick
   ${prefix}dogestick
   ${prefix}bucinstick
   ${prefix}awoawo
   ${prefix}benedict
   ${prefix}chat
   ${prefix}dbfly
   ${prefix}dino_kuning
   ${prefix}doge
   ${prefix}gojosatoru
   ${prefix}hope_boy
   ${prefix}jisoo
   ${prefix}kr_robot
   ${prefix}kucing
   ${prefix}lonte
   ${prefix}manusia_lidi
   ${prefix}menjamet
   ${prefix}meow
   ${prefix}nicholas
   ${prefix}patrick
   ${prefix}popoci
   ${prefix}sponsbob
   ${prefix}kawan_sponsbob
   ${prefix}tyni

  *Others Menu*
   ${prefix}coffe
   ${prefix}katabijak
   ${prefix}quotes
   ${prefix}quotes2
   ${prefix}quotesanime
   ${prefix}katailham
   ${prefix}katabucin
   ${prefix}katasenja
   ${prefix}fiersabersari
   ${prefix}couple
   ${prefix}darkjokes
  
  *Thanks To*
   Dika Ardnt
   Mhankbarbar
   Fatih Arridho
   Ryuka Team
   Zeeone Ofc
   Bagas Prdn
   Nurutomo
   OnX Dz
   Nekel
   Yoga
   Deff
   Riy
   kian
  `
  }

  // Welcome
  exports.welcome = () => {
	return `Welcome
  `
  }

  // Leave
  exports.leave = () => {
  return`Byeee
  `
  }

  // Donasi
  exports.donasi  = (ownernomer) => {
  return `
  
  𝘏𝘢𝘪 𝘬𝘢𝘬 ☺️ 
𝘒𝘢𝘭𝘪𝘢𝘯 𝘣𝘪𝘴𝘢 𝘮𝘦𝘯𝘥𝘶𝘬𝘶𝘯𝘨 𝘴𝘢𝘺𝘢 𝘢𝘨𝘢𝘳 𝘣𝘰𝘵 𝘪𝘯𝘪 𝘵𝘦𝘵𝘢𝘱 𝘶𝘱 𝘵𝘰 𝘥𝘢𝘵𝘦 𝘥𝘦𝘯𝘨𝘢𝘯 𝘤𝘢𝘳𝘢 𝘥𝘰𝘯𝘢𝘴𝘪

𝘉𝘦𝘳𝘢𝘱𝘢𝘱𝘶𝘯 𝘥𝘰𝘯𝘢𝘴𝘪 𝘬𝘢𝘭𝘪𝘢𝘯 𝘢𝘬𝘢𝘯 𝘴𝘢𝘯𝘨𝘢𝘵 𝘣𝘦𝘳𝘢𝘳𝘵𝘪 👍

*𝘋𝘖𝘕𝘈𝘚𝘐 𝘗𝘜𝘓𝘚𝘈=62 838-4540-9710*

  `
  }

  // Simple Menu
  exports.botinfo = (prefix) => {
  return`
  
  
  *Bot Info*
   ${prefix}ping
   ${prefix}runtime
   ${prefix}speed
   ${prefix}owner
   ${prefix}menu
   ${prefix}delete
   ${prefix}infochat
   ${prefix}quoted
   ${prefix}listpc
   ${prefix}listgc
  `
  }

  exports.ownermenu = (prefix) => {
  return `
  *Owner Menu*
   ${prefix}react [emoji]
   ${prefix}chat [option]
   ${prefix}join [link]
   ${prefix}leave
   ${prefix}block @user
   ${prefix}unblock @user
   ${prefix}bcgroup 
   ${prefix}bcall 
   ${prefix}setppbot  
   ${prefix}setexif
   ${prefix}setmenu
   ${prefix}setallmenu
   ${prefix}autoreact [on/off]
  `
  }

  exports.groupmenu = (prefix) => {
  return `
  *Group Menu*
   ${prefix}linkgroup
   ${prefix}ephemeral [option]
   ${prefix}setppgc
   ${prefix}setname 
   ${prefix}setdesc 
   ${prefix}group [option]
   ${prefix}editinfo [option]
   ${prefix}add @user
   ${prefix}kick @user
   ${prefix}listonline
   ${prefix}hidetag 
   ${prefix}tagall 
   ${prefix}antilink [on/off]
   ${prefix}nsfw [on/off]
   ${prefix}mute [on/off]
   ${prefix}promote @user
   ${prefix}demote @user
   ${prefix}absen
   ${prefix}hadir
   ${prefix}tidakhadir
   ${prefix}cekabsen
   ${prefix}hapusabsen
  `
  }

  exports.databasemenu = (prefix) => {
  return`
  *Database Menu*
   ${prefix}setcmd
   ${prefix}listcmd
   ${prefix}delcmd
   ${prefix}lockcmd
   ${prefix}addmsg
   ${prefix}listmsg
   ${prefix}getmsg
   ${prefix}delmsg
  `
  }

  exports.searchmenu = (prefix) => {
  return `
  *Search Menu*
   ${prefix}play 
   ${prefix}yts 
   ${prefix}google 
   ${prefix}gimage 
   ${prefix}pinterest 
   ${prefix}wikimedia 
   ${prefix}ytsearch 
   ${prefix}githubstalk
   ${prefix}igstalk
   ${prefix}ringtone 
  `
  }

  exports.downloadermenu = (prefix) => {
  return `
  *Downloader Menu*
   ${prefix}tiktok [url]
   ${prefix}tiktokwm [url]
   ${prefix}tiktoknowm [url]
   ${prefix}tiktokaudio [url]
   ${prefix}instagram [url]
   ${prefix}twitter [url]
   ${prefix}facebook [url]
   ${prefix}ytmp4 [url]
   ${prefix}ytmp3 [url]
   ${prefix}play [judul]
   ${prefix}ytsearch [judul]
   ${prefix}gitclone
  `
  }

  exports.convertmenu = (prefix) => {
  return `
  *Converter Menu*
   ${prefix}toimage
   ${prefix}removebg
   ${prefix}sticker
   ${prefix}setwm
   ${prefix}emojimix
   ${prefix}tovideo
   ${prefix}togif
   ${prefix}tourl
   ${prefix}tovn
   ${prefix}tomp3
   ${prefix}toaudio
   ${prefix}ebinary
   ${prefix}dbinary
   ${prefix}styletext
   ${prefix}smeme
   ${prefix}semoji
   ${prefix}nulisbiasa
   ${prefix}nuliskanan
   ${prefix}nuliskiri
   ${prefix}foliokanan
   ${prefix}foliokiri
  `
  }

  exports.textpromenu = (prefix) => {
  return `
  *Textpro Menu*
   ${prefix}serti1 [teks]
   ${prefix}serti2 [teks]
   ${prefix}serti3 [teks]
   ${prefix}blackpink [teks]
   ${prefix}neon [teks]
   ${prefix}magma [teks]
   ${prefix}3dstone [teks]
   ${prefix}halloween [teks]
   ${prefix}horror [teks]
   ${prefix}larva [teks]
   ${prefix}toxic [teks]
   ${prefix}marvel [teks|teks]
   ${prefix}potter [teks]
   ${prefix}pornhub [teks|teks]
  `
  }

  exports.photooxymenu = (prefix) => {
  return`
  *Photooxy Menu*
   ${prefix}3d-underwater  
   ${prefix}3dtext-pig  
   ${prefix}3dvalentine-cards  
   ${prefix}anonymous-neon  
   ${prefix}advanced-glow  
   ${prefix}art-shader  
   ${prefix}angels-wings 
  `
  }

  exports.ephotomenu = (prefix) => {
  return `
  *Ephoto Menu*
   ${prefix}3dnature
   ${prefix}bevel
   ${prefix}burnpaper
   ${prefix}quotesgrass
   ${prefix}stars
   ${prefix}flaming
   ${prefix}romance
   ${prefix}gerbang
   ${prefix}fur
   ${prefix}funnycup
  `
  }

  exports.randomanimemenu = (prefix) => {
  return `
  *Anime Menu*
   ${prefix}loli
   ${prefix}neko
   ${prefix}waifu
   ${prefix}shinobu
   ${prefix}megumin
   ${prefix}bully
   ${prefix}cuddle
   ${prefix}cry
   ${prefix}hug
   ${prefix}awoo
   ${prefix}kiss
   ${prefix}lick
   ${prefix}pat
   ${prefix}smug
   ${prefix}bonk
   ${prefix}yeet
   ${prefix}blush
   ${prefix}smile
   ${prefix}wave
   ${prefix}highfive
   ${prefix}handhold
   ${prefix}nom
   ${prefix}bite
   ${prefix}glomp
   ${prefix}slap
   ${prefix}kill
   ${prefix}happy
   ${prefix}wink
   ${prefix}poke
   ${prefix}dance
   ${prefix}cringe
   ${prefix}anime
   ${prefix}yotsuba
   ${prefix}shinomiya
   ${prefix}yumeko
   ${prefix}tejina
   ${prefix}chiho
   ${prefix}toukachan
   ${prefix}akira
   ${prefix}itori
   ${prefix}kurumi
   ${prefix}miku
   ${prefix}pokemon
   ${prefix}ryujin
   ${prefix}kaori
   ${prefix}shizuka
   ${prefix}kotori
   ${prefix}kaga
   ${prefix}mikasa
   ${prefix}akiyama
   ${prefix}gremory
   ${prefix}isuzu
   ${prefix}cosplay
   ${prefix}shina
   ${prefix}kagura
   ${prefix}shinka
   ${prefix}eba
   ${prefix}deidara
   ${prefix}itachi
   ${prefix}madara
   ${prefix}yuki
   ${prefix}asuna
   ${prefix}ayuzawa
   ${prefix}chitoge
   ${prefix}emilia
   ${prefix}hestia
   ${prefix}inori
   ${prefix}ana
   ${prefix}boruto
   ${prefix}erza
   ${prefix}kakasih
   ${prefix}sagiri
   ${prefix}minato
   ${prefix}naruto
   ${prefix}nezuko
   ${prefix}onepiece
   ${prefix}sakura
   ${prefix}sasuke
   ${prefix}tsunade
   ${prefix}jhota
   ${prefix}hinata
  `
  }

  exports.nsfwmenu = (prefix) => {
  return`
  *Nsfw Menu*
   ${prefix}ahegeo
   ${prefix}ass
   ${prefix}bdsm
   ${prefix}blowjob
   ${prefix}cuckold 
   ${prefix}cum 
   ${prefix}ero
   ${prefix}femdom
   ${prefix}foot
   ${prefix}gangbang
   ${prefix}glasses
   ${prefix}hentai
   ${prefix}ahy
   ${prefix}mstb
   ${prefix}neko
   ${prefix}orgy
   ${prefix}panties
   ${prefix}pussy
   ${prefix}yuri
   ${prefix}zettai
  `
  }

  exports.gamemenu = (prefix) => {
  return`
  *Game Menu*
   ${prefix}tictactoe [nama room]
   ${prefix}delttt
   ${prefix}tebak [option]
   ${prefix}math [mode]
   ${prefix}suitpvp [@tag]
   ${prefix}suit2
   ${prefix}aduayam
  `
  }
  
  exports.funmenu = (prefix) => {
  return `
  *Fun Menu*
   ${prefix}bagaimanakah
   ${prefix}kapankah
   ${prefix}apakah
   ${prefix}bisakah
   ${prefix}rate
   ${prefix}wangy
   ${prefix}gantengcek
   ${prefix}cekganteng
   ${prefix}cantikcek
   ${prefix}cekcantik
   ${prefix}sangecek
   ${prefix}ceksange
   ${prefix}gaycek
   ${prefix}cekgay
   ${prefix}lesbicek
   ${prefix}halah
   ${prefix}hilih
   ${prefix}huluh
   ${prefix}heleh
   ${prefix}holoh
   ${prefix}jadian
   ${prefix}jodohku
   ${prefix}truth
   ${prefix}dare
  `
  }

  exports.primbonmenu = (prefix) => {
  return`
  *Primbon Menu*
   ${prefix}nomorhoki
   ${prefix}artimimpi
   ${prefix}artinama
   ${prefix}ramaljodoh
   ${prefix}ramaljodohbali
   ${prefix}suamiistri
   ${prefix}ramalcinta
   ${prefix}cocoknama
   ${prefix}pasangan
   ${prefix}jadiannikah
   ${prefix}sifatusaha
   ${prefix}rezeki
   ${prefix}pekerjaan
   ${prefix}nasib
   ${prefix}penyakit
   ${prefix}tarot
   ${prefix}fengshui
   ${prefix}haribaik
   ${prefix}harisangar
   ${prefix}harisial
   ${prefix}nagahari
   ${prefix}arahrezeki
   ${prefix}peruntungan
   ${prefix}weton
   ${prefix}karakter
   ${prefix}keberuntungan
   ${prefix}memancing
   ${prefix}masasubur
   ${prefix}zodiak
   ${prefix}shio
  `
  }

  exports.cerpenmenu = (prefix) => {
  return `
  *Cerpen Menu*
   ${prefix}cerpen anak
   ${prefix}cerpen bahasa daerah
   ${prefix}cerpen bahasa inggris
   ${prefix}cerpen bahasa jawa
   ${prefix}cerpen bahasa sunda
   ${prefix}cerpen budaya
   ${prefix}cerpen cinta
   ${prefix}cerpen cinta islami
   ${prefix}cerpen cinta pertama
   ${prefix}cerpen cinta romantis
   ${prefix}cerpen cinta sedih
   ${prefix}cerpen cinta segitiga
   ${prefix}cerpen cinta sejati
   ${prefix}cerpen galau
   ${prefix}cerpen gokil
   ${prefix}cerpen inspiratif
   ${prefix}cerpen jepang
   ${prefix}cerpen kehidupan
   ${prefix}cerpen keluarga
   ${prefix}cerpen kisah nyata
   ${prefix}cerpen korea
   ${prefix}cerpen kristen
   ${prefix}cerpen liburan
   ${prefix}cerpen lingkungan
   ${prefix}cerpen lucu
   ${prefix}cerpen malaysia
   ${prefix}cerpen mengharukan
   ${prefix}cerpen misteri
   ${prefix}cerpen motivasi
   ${prefix}cerpen nasihat
   ${prefix}cerpen nasionalisme
   ${prefix}cerpen olahraga
   ${prefix}cerpen patah hati
   ${prefix}cerpen penantian
   ${prefix}cerpen pendidikan
   ${prefix}cerpen pengalaman pribadi
   ${prefix}cerpen pengorbanan
   ${prefix}cerpen penyesalan
   ${prefix}cerpen perjuangan
   ${prefix}cerpen perpisahan
   ${prefix}cerpen persahabatan
   ${prefix}cerpen petualangan
   ${prefix}cerpen ramadhan
   ${prefix}cerpen remaja
   ${prefix}cerpen renungan
   ${prefix}cerpen rindu
   ${prefix}cerpen rohani
   ${prefix}cerpen romantis
   ${prefix}cerpen sastra
   ${prefix}cerpen sedih
   ${prefix}cerpen sejarah
   ${prefix}cerpen slice of life
   ${prefix}cerpen terjemahan
   ${prefix}cerpen thriller
  `
  }

  exports.informationmenu = (prefix) => {
  return `
  *Information Menu*
   ${prefix}merdeka-news 
   ${prefix}kontan-news 
   ${prefix}cnbc-news 
   ${prefix}tribun-news 
   ${prefix}indozone-news 
   ${prefix}kompas-news 
   ${prefix}detik-news 
   ${prefix}daily-news 
   ${prefix}inews-news 
   ${prefix}okezone-news 
   ${prefix}sindo-news 
   ${prefix}tempo-news 
   ${prefix}antara-news 
   ${prefix}cnn-news 
   ${prefix}fajar-news 
   ${prefix}infogempa
   ${prefix}infocovid
   ${prefix}faktaunik
  `
  }
  
  exports.cecanmenu = (prefix) => {
  return `
  *Cecan Menu*
   ${prefix}china
   ${prefix}vietnam
   ${prefix}thailand
   ${prefix}indonesia
   ${prefix}korea
   ${prefix}japan
   ${prefix}malaysia
  `
  }

  exports.asupanmenu = (prefix) => {
  return `
  *Asupan Menu*
   ${prefix}hijaber
   ${prefix}cecan
   ${prefix}bocil
   ${prefix}ukhty
   ${prefix}gheayubi
   ${prefix}rikagusriani
   ${prefix}santuy
  `
  }

  exports.islamicmenu = (prefix) => {
  return `
  *Islamic Menu*
   ${prefix}iqra
   ${prefix}hadist
   ${prefix}alquran
   ${prefix}juzamma
   ${prefix}tafsirsurah
  `
  }

  exports.voicechargermenu = (prefix) => {
  return`
  *Voice Changer*
   ${prefix}bass
   ${prefix}blown
   ${prefix}deep
   ${prefix}earrape
   ${prefix}fast
   ${prefix}fat
   ${prefix}nightcore
   ${prefix}reverse
   ${prefix}robot
   ${prefix}slow
   ${prefix}tupai
  `
  }
  
  exports.soundmenu = (prefix) => {
  return `
  *Sound Menu*
   ${prefix}sound1
   ${prefix}sound2
   ${prefix}sound3
   ${prefix}sound4
   ${prefix}sound5
   ${prefix}sound6
   ${prefix}sound7
   ${prefix}sound8
   ${prefix}sound9
   ${prefix}sound10
   ${prefix}sound11
   ${prefix}sound12
   ${prefix}sound13
   ${prefix}sound14
   ${prefix}sound15
   ${prefix}sound16
   ${prefix}sound17
   ${prefix}sound18
   ${prefix}sound19
   ${prefix}sound20
   ${prefix}sound21
   ${prefix}sound22
   ${prefix}sound23
   ${prefix}sound24
   ${prefix}sound25
   ${prefix}sound26
   ${prefix}sound27
   ${prefix}sound28
   ${prefix}sound29
   ${prefix}sound30
   ${prefix}sound31
   ${prefix}sound32
   ${prefix}sound33
   ${prefix}sound34
   ${prefix}sound35
   ${prefix}sound36
   ${prefix}sound37
   ${prefix}sound38
   ${prefix}sound39
   ${prefix}sound40
   ${prefix}sound41
   ${prefix}sound42
   ${prefix}sound43
   ${prefix}sound44
   ${prefix}sound45
   ${prefix}sound46
   ${prefix}sound47
   ${prefix}sound48
   ${prefix}sound49
   ${prefix}sound50
   ${prefix}sound51
   ${prefix}sound52
   ${prefix}sound53
   ${prefix}sound54
   ${prefix}sound55
   ${prefix}sound56
   ${prefix}sound57
   ${prefix}sound58
   ${prefix}sound59
   ${prefix}sound60
   ${prefix}sound61
   ${prefix}sound62
   ${prefix}sound63
   ${prefix}sound64
   ${prefix}sound65
   ${prefix}sound66
   ${prefix}sound67
   ${prefix}sound68
   ${prefix}sound69
   ${prefix}sound70
   ${prefix}sound71
   ${prefix}sound72
   ${prefix}sound73
   ${prefix}sound74
  `
  }

  exports.telegramstickermenu = (prefix) => {
  return `
  *Telegram Sticker*
   ${prefix}gurastick
   ${prefix}dogestick
   ${prefix}bucinstick
   ${prefix}awoawo
   ${prefix}benedict
   ${prefix}chat
   ${prefix}dbfly
   ${prefix}dino_kuning
   ${prefix}doge
   ${prefix}gojosatoru
   ${prefix}hope_boy
   ${prefix}jisoo
   ${prefix}kr_robot
   ${prefix}kucing
   ${prefix}lonte
   ${prefix}manusia_lidi
   ${prefix}menjamet
   ${prefix}meow
   ${prefix}nicholas
   ${prefix}patrick
   ${prefix}popoci
   ${prefix}sponsbob
   ${prefix}kawan_sponsbob
   ${prefix}tyni
  `
  }

  exports.othersmenu = (prefix) => {
  return `
  *Others Menu*
   ${prefix}coffe
   ${prefix}katabijak
   ${prefix}quotes
   ${prefix}quotes2
   ${prefix}quotesanime
   ${prefix}katailham
   ${prefix}katabucin
   ${prefix}katasenja
   ${prefix}fiersabersari
   ${prefix}couple
   ${prefix}darkjokes
  `
  }

  //tqto gsh di hps y :) kalau mai tmbhin aja nama kalian.
  exports.thanksto = () => {
  return `
  *Thanks To*
   Dika Ardnt
   Mhankbarbar
   Fatih Arridho
   Ryuka Team
   Zeeone Ofc
   Bagas Prdn
   Nurutomo
   OnX Dz
   Nekel
   Yoga
   Deff
   Riy
   Kian
  `
  }
