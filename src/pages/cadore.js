import React from 'react'
import Gita from "../Components/Gita"
import Sidebar from '../Components/Sidebar'

export default function Cadore() {

  let fotoAiarnola = []
  let foto1 = {path: 'cadore/Aiarnola_01.jpg', desc: 'Dolomiti di Sesto'}
  let foto2 = {path: 'cadore/Aiarnola_02.jpg', desc: 'Facili canalini'}
  let foto3 = {path: 'cadore/Aiarnola_03.jpg', desc: 'Tofane'}
  let foto4 = {path: 'cadore/Aiarnola_04.jpg', desc: 'Duranno e Preti'}
  fotoAiarnola.push(foto1)
  fotoAiarnola.push(foto2)
  fotoAiarnola.push(foto3)
  fotoAiarnola.push(foto4)

  let descAjarnola = `Si lascia l'auto poco a nord del Passo del Zovo e si segue lungamente, con scarsa pendenza, il sentiero 153.
  Ormai in vista delle pareti est del Monte Ajarnola si imbocca il sentiero 127 che aggira il monte sul versante sud ovest, offrendo
  ottimo panorama sulle dolomiti di Sesto. C'è da arrampicare facilmente qualche balza e canalino, mai oltre il I grado e,
  superate un paio di antecime si guadagna la vetta.`

  let fotoBelPra = []
  let foto7 = {path: 'cadore/BelPra03.JPG', desc: 'Cengia ghiacciata'}
  let foto9 = {path: 'cadore/BelPra05.JPG', desc: 'Cengia'}
  let foto10 = {path: 'cadore/BelPra06.JPG', desc: 'Torretta finale'}
  let foto13 = {path: 'cadore/BelPra09.JPG', desc: 'Antelao'}
  let foto14 = {path: 'cadore/BelPra10.JPG', desc: 'Torretta finale'}
  let foto16 = {path: 'cadore/BelPra12.JPG', desc: 'Torre Sabbioni'}
  fotoBelPra.push(foto7)
  fotoBelPra.push(foto9)
  fotoBelPra.push(foto10)
  fotoBelPra.push(foto14)
  fotoBelPra.push(foto13)
  fotoBelPra.push(foto16)  
  let descBelpra = `Il rifugio S. Marco serve come punto di partenza per la Forcella Grande. Si cammina quindi 
	in falsopiano per una traccia che corre lungo i ghiaioni alla base della 
	Torre Sabbioni, fino ad aggirarla completamente sul lato nord. Risulta a 
	questo punto evidente la cengia che sale verso sinistra (1h 20min), senza 
	alcuna difficoltà, lungo le bastionate di cima Bel Pra. Aggirato il tornante 
	la cengia prosegue ora verso destra (sud-est), dovendo risalire alcuni metri 
	per riprenderla (I) per arrivare dopo poco al passaggio chiave, con un 
	restringimento su colatoio (possibilmente vetrato), e calata di circa 4m, I 
	e 2m II. Un altro punto ostico della lunga cengia si presenta nel finale 
	dovendo aggirare uno spigoletto con poco spazio per i piedi. Risalite alcune 
	placche in aderenza si sbocca nel faticosissimo ghiaione, circa 300m di 
	estenuante risalita per affacciarsi sul versante di S. Vito. Da qui si può 
	già attrezzare una sicura per affrontare una rampa in lieve salita piuttosto 
	esposta. Pervenuti ad un terrazzo si arrampica per 5m in verticale (II-) e 
	poi ancora a destra con roccia sempre più friabile (passi di I, vari 
	spuntoni per assicurazione). L'aggiramento di un ultimo risalto in cengia 
	costituisce il passaggio più esposto con appigli malsicuri per le mani. 
	Infilato un facile canale in direzione nord si affronta un risalto di II in 
	spaccata per approdare alla cresta finale che porta in vetta con un giro a 
	ferro di cavallo su roccia rotta (3h dall'attacco). Salita bellissima ed 
	appagante.`

  let fotoPelmetto = []
  let foto17 = {path: 'cadore/pelmetto01.jpg', desc: 'Cenge nel canalone'}
  let foto18 = {path: 'cadore/pelmetto02.jpg', desc: 'Cengia del Pelmetto'}
  let foto19 = {path: 'cadore/pelmetto03.jpg', desc: 'Salto del Mago'}
  let foto20 = {path: 'cadore/pelmetto04.jpg', desc: 'Parete superiore'}
  let foto21 = {path: 'cadore/pelmetto05.jpg', desc: 'Passaggio esposto (II-)'}
  let foto22 = {path: 'cadore/pelmetto06.jpg', desc: 'In cima'}
  fotoPelmetto.push(foto17)
  fotoPelmetto.push(foto18)
  fotoPelmetto.push(foto19)
  fotoPelmetto.push(foto20)
  fotoPelmetto.push(foto21)
  fotoPelmetto.push(foto22)
  let descPelmetto = `Da Coi in 1h si arriva all'attacco del canalone della fissura. Si rimonta un
  risalato di mughi per poi risalire lungamente per ghiaione o su facili balze
  rocciose alla destra del canale. A 2/3 del canalone bisogna superare un
  salto di rocce. Seguendo gli ometti verso la destra si superano 3m di II- e
  poi si risale un serie di canalini cengette, (max I+) l'ultima delle quali
  e' esposta e stretta (10m circa in piano). Poi faticosamente si arriva quasi
  alla fissura per prendere l'ampia cengia del Pelmetto (2h.45). La cengia
  prima sale leggermente, molto larga. Dopo il primo spigolo tende a
  restringersi e gli ultimi 100/150m sono piuttosto su terreno esile e
  stretto. Solo un paio di passaggi richiedono attenzione. Girato l'ultimo
  spigolo si perviene al salto del mago. Si devono scalare per 6m due gradoni
  (II) e poi c'e' il passaggio chiave, 4m IV, che porta ad una cengia
  abbastanza comoda con sosta però spostata un 5m a destra rispetto al punto
  chiave. Da qui non abbiam più usato la corda e l'arrampicata risulta
  piacevole sul I continuo con un paio di passaggi di II-, uno dei quali
  esposto ma solido. Gli ultimi metri di dislivello sono più facili, su
  sentiero che scavalca una forcelletta di un'anti-cima. 5h.15 alla cima, 3h a
  scendere con rapida discesa per i ghiaioni della fissura.`

  let fotoCesta = []
  let foto23 = {path: 'cadore/LaCesta-01.JPG', desc: 'Cime Ciadin del Loudo'}
  let foto24 = {path: 'cadore/LaCesta-02.JPG', desc: 'Canale di discesa'}
  let foto25 = {path: 'cadore/LaCesta-03.JPG', desc: 'Verso il Sorapiss'}
  let foto26 = {path: 'cadore/LaCesta-04.JPG', desc: 'Esplorazioni'}
  let foto27 = {path: 'cadore/LaCesta-05.JPG', desc: 'Canale di discesa'}
  let foto28 = {path: 'cadore/LaCesta-06.JPG', desc: 'Cresta'}
  let foto29 = {path: 'cadore/LaCesta-07.JPG', desc: 'Pinnacoli'}
  let foto30 = {path: 'cadore/LaCesta-08.JPG', desc: 'Ometto di vetta'}
  fotoCesta.push(foto23)
  fotoCesta.push(foto24)
  fotoCesta.push(foto25)
  fotoCesta.push(foto26)
  fotoCesta.push(foto27)
  fotoCesta.push(foto28)
  fotoCesta.push(foto29)
  fotoCesta.push(foto30)
  let descCesta = `Dal Passo Tre Croci si 
  imbocca la carrareccia (sent. 213) che sale molto dolcemente in versante 
  Faloria. Al bivio con il sentiero 216 si prende a destra in 
  direzione forcella del Ciadin, che non si raggiunge, dovendo scartare a 
  destra nell'ampio cadin che si apre tra il versante nord della Cesta e 
  le cime di Loudo. Aiutati da alcuni ometti si costeggia il cadin sulla 
  destra, alla base della costola rocciosa, innalzandosi fin alla base 
  della parete appoggiata della Cesta. Qui 2 alternative: salire in 
  corrispondenza di un paletto rosso piantato, quasi sullo spigolo che da 
  verso Cortina, per poi imboccare un canale friabile e risaltare un 
  ultimo gradone guadagnando un ampio colletto con grosso ometto (I 
  continuo, anche moderatamente esposto); alternativamente si prosegue 
  alla base delle rocce in direzione di un'altro ometto, fino all'imbocco 
  di un evidente canale roccioso, alquanto stretto, appoggiato anch'esso. 
  Risalendolo, anche uscendo sullo spigolo ove si restringa troppo, si 
  perviene al colletto citato prima (I e I+ abbastanza solido). Noi 
  abbiamo adottato la prima soluzione in salita e la seconda in discesa, 
  in entrambi i casi con un tiro di corda da 40m. Più oltre le difficoltà 
  diminuiscono, con solo sporadici tratti di I; in particolare si traversa 
  un esile filo di cresta con spuntoni, alcuni non affidabile, ma con 
  esposizione moderata. La parte finale dell'ampia cupolona sommitale è 
  decisamente facile. Peccato per le nuvole che oscurano Sorapiss e Dito 
  di Dio, invece interessanti gli scorci verso Punta Nera e cime Ciadin di 
  Loudo.`

  let fotoFroppa = []
  let foto31 = {path: 'cadore/Froppa01.jpg', desc: 'Dalla Cima'}
  let foto32 = {path: 'cadore/Froppa02.jpg', desc: 'Da forcella Kugy'}
  let foto33 = {path: 'cadore/Froppa03.jpg', desc: 'Verso l\'Oltrepiave'}
  let foto34 = {path: 'cadore/Froppa04.jpg', desc: 'Il Cristallo'}
  let foto35 = {path: 'cadore/Froppa05.jpg', desc: 'Cimon del Froppa'}
  let foto36 = {path: 'cadore/Froppa06.jpg', desc: 'Sulla fessura iniziale'}
  fotoFroppa.push(foto31)
  fotoFroppa.push(foto32)
  fotoFroppa.push(foto33)
  fotoFroppa.push(foto34)
  fotoFroppa.push(foto35)
  fotoFroppa.push(foto36)
  let descFroppa = `Salendo dal 
  Bivacco Tiziano verso forcella Froppa l'ultimo tratto è molto ripido e 
  friabile, ci sono corde metalliche per superare uno spallone roccioso. 
  Sul versante sud la risalita di forcella Kugy presenta tratti di I, 
  pochissimo esposto. L'attacco della via impone 5/6m di III grado con un 
  passo leggermente strapiombante, ove abbiamo trovato un cordino inserito 
  in un chiodo. Poi ci sono altri 5m di II per arrivare alla prima sosta. 
  più oltre un breve canale di II+ alquanto stretto (pochi metri). 
  Successivamente la salita è meno difficile e mai pericolosa con qualche 
  passo di II. Il canalone finale che porta all'intaglio di vetta presenta 
  Difficoltà sul I+ con roccette piuttosto malsicure. Nel ritorno calata 
  alla forcella dalla prima sosta attrezzata. La salita è nel complesso 
  molto faticosa per l'avvicinamento, segnalata a vernice rossa fina a 
  forcella Froppa e poi con ometti; consigliabile farla in due giorni.`

  let fotoDoge = []
  let foto37 = {path: 'cadore/CornoDelDoge-01.jpg', desc: 'Il profilo del Corno'}
  let foto38 = {path: 'cadore/CornoDelDoge-02.jpg', desc: 'Parete gialla in cengia'}
  let foto39 = {path: 'cadore/CornoDelDoge-03.jpg', desc: 'Il passaggio chiave'}
  let foto40 = {path: 'cadore/CornoDelDoge-04.jpg', desc: 'I pendii terminali'}
  fotoDoge.push(foto37)
  fotoDoge.push(foto38)
  fotoDoge.push(foto39)
  fotoDoge.push(foto40)

  let descDoge = `Da Ponte degli 
	Alberi presso Palus San Marco Si imbocca la sterrata, sentiero CAI 226, che 
	per oltre un chilometro e mezzo scorre pianeggiante nel bosco e si seguono 
	ai bivii le indicazioni per il Bivacco Voltolina. Risalita una ripida 
	faggeta con percorso a zig-zag si perde poi un po' di quota prima della 
	biforcazione che porta a seguire il sentiero CAI 278. Superata una parete 
	appoggiata con attrezzature fisse si giunge in breve in vista del bivacco. 
	Prestando attenzione a delle segnalazioni su di un masso si volge ora a 
	destra in direzione della cengia erbose ben evidente che taglia la parete 
	est del Corno del Doge. Per circa un centinaio di metri si segue il sentiero 
	CAI 280, Alta via Numero 5, e lo si abbandona quasi subito quando i mughi 
	lasciano spazio alla sinistra ad una paretina dove si scorge a sinistra un 
	ometto circa 10 m sopra la traccia. Si sale così su pendio prevalentemente 
	erboso, tenendo la destra dovendo intercettare la cengia proprio al suo 
	inizio. Si percorre ora lungamente la cengia, sempre comoda ed in leggera 
	pendenza ascendente, passando sotto bellissimi appichi di roccia gialla 
	solidissima. Quando si apre un canale accessibile sulla destra è il momento 
	di abbandonare la cornice erbosa, rimontando facili salti, sempre con zolle 
	affioranti, mantenendo la destra come direzione dominante. I radi ometti 
	portano ad un bel ballatoio erboso dal quale si scorge il tratto chiave 
	della salita. Ci si abbassa un po' su cengia fino alla placca verticale che 
	interrompe il percorso. Sono 4 m di roccia buona da percorrersi in 
	orizzontale con buoni appigli per le mani, piccole scaglie, mentrei per i 
	piedi serve qualche appoggio in aderenza. L'esposizione è consistente 
	pertanto conviene attrezzare una breve corda fissa. All'uscita si doppia uno 
	spigolo su roccia solida (II-) sempre in orizzontale per poi infilare un 
	canalone detritico che si risale lungamente per uscirne sulla destra. 
	Rimontati ancora ripidi pendii erbosi si approccia la dorsale che scende 
	dalla cima, ormai in vista, e faticosamente senza percorso fisso si 
	raggiunge la cresta ormai a poche decine di metri dalla vetta.`


  let fotoPopena = []
  let foto41 = {path: 'cadore/popena00.jpg', desc: 'Ruderi rif. Popena'}
  let foto42 = {path: 'cadore/popena01.jpg', desc: 'Nel canalone con neve perenne'}
  let foto43 = {path: 'cadore/popena02.jpg', desc: 'In parete tra le nebbie'}
  let foto44 = {path: 'cadore/popena03.jpg', desc: 'Dalla cima verso Sorapiss ed Antelao'}
  let foto45 = {path: 'cadore/popena04.jpg', desc: 'Discese in corda doppia'}
  let foto46 = {path: 'cadore/popena05.jpg', desc: 'Disarrampicando sul I continuo'}
  fotoPopena.push(foto41)
  fotoPopena.push(foto42)
  fotoPopena.push(foto43)
  fotoPopena.push(foto44)
  fotoPopena.push(foto45)
  fotoPopena.push(foto46)
  let descPopena = `Via normale lunga ed impegnativa. Consigliato materiale alpinistico, ramponi e piccozza.
  Da Misurina si prende il sentiero che porta ai ruderi del rif. Popena. In vista della montagna si perde quota in Val popena 
  per affrontare il lungo ghiaione, al termine del quale si imbocca a sinistra la prima cengia della parete da percorrere
  fino in corrispondenza dell'ampio canalone innevato che divide la parete. Lo si risale in sicura e al termine si prende ancora a sinistra
  la seconda cengia che ci conduce ad un ampio anfiteatro di parete appoggiata da scalare sul I/I+ continuo.
  Le difficoltà aumentano più in alto sbucando verso sinistra ad un diedro/parete da scalare sul II/II+ fino
  a un movimento ancora in cengia verso sinistra per accedere alla cresta finale che oppone ancora passaggi in arrampicata
  più facili e non esposti. Discesa attrezzando alcune doppie nei tratti più difficili.`

  let fotoCristallo = []
  let foto47 = {path: 'cadore/Cristallo_00.jpg', desc: 'Baraccamenti grande guerra'}
  let foto48 = {path: 'cadore/Cristallo_01.jpg', desc: 'Passaggio in cengia'}
  let foto49 = {path: 'cadore/Cristallo_02.jpg', desc: 'Canale con passaggio di III-'}
  let foto50 = {path: 'cadore/Cristallo_03.jpg', desc: 'Caratteristico uovo'}
  let foto51 = {path: 'cadore/Cristallo_04.jpg', desc: 'Cortina in basso'}
  let foto52 = {path: 'cadore/Cristallo_05.jpg', desc: 'La lasta'}
  let foto53 = {path: 'cadore/Cristallo_06.jpg', desc: 'Nevaietto'}
  let foto54 = {path: 'cadore/Cristallo_07.jpg', desc: 'Il Piz Popena'}
  fotoCristallo.push(foto47)
  fotoCristallo.push(foto48)
  fotoCristallo.push(foto49)
  fotoCristallo.push(foto50)
  fotoCristallo.push(foto51)
  fotoCristallo.push(foto52)
  fotoCristallo.push(foto53)
  fotoCristallo.push(foto54)
  let descCristallo = `Dal Passo Tre Croci pernottato con sacco a pelo al Col da Varda. Via normale arcigna da affrontare col massimo rispetto.
  Attrezzatura alpinistica consigliata sia per eventualmente assicurarsi in alcuni passaggi in salita che per le doppie in discesa. 
  Occorre prestare molta attenzione all'orientamento nella vasta parete, alcuni ometti possono fuorviare, magari dedicati a postazioni da corda doppia in discesa.`

  let fotoSorapiss = []
  let foto55 = {path: 'cadore/sorapiss01.jpg', desc: 'Cima Bel Prà e Antelao'}
  let foto56 = {path: 'cadore/sorapiss02.jpg', desc: 'Torre Sabbioni'}
  let foto57 = {path: 'cadore/sorapiss03.jpg', desc: 'Sistema di cenge in parete'}
  let foto58 = {path: 'cadore/sorapiss04.jpg', desc: 'Verso ovest...'}
  let foto59 = {path: 'cadore/sorapiss05.jpg', desc: 'Camino di III in discesa'}
  fotoSorapiss.push(foto55)
  fotoSorapiss.push(foto56)
  fotoSorapiss.push(foto57)
  fotoSorapiss.push(foto58)
  fotoSorapiss.push(foto59)
  let descSorapiss = `Via lunga con bolli rossi sbiaditi, un passaggio III (12 m. di doppia 
		a scendere), per lo più I friabile e passi di II, lunghe cenge detritiche e a tratti esposte.`

    let fotoCimaValdarcia = []
    let foto60 = {path: 'cadore/CimaValdarcia01.jpg', desc: 'Cima di Val d\'Arcia'}
    fotoCimaValdarcia.push(foto60)
  
    let descCimaValdarcia = `Da 
		F.lla Valdarcia si sale un canale ghiaioso appena sul lato nord e si 
		attacca una paretina di 10 m, o per cresta, appigli non molto grandi ma solidi (II, II-) poi ci si infila in un 
		diedro di una ventina di metri, già più detritico, comunque stando sulle 
		scaglie del diedro si sale bene (I+). 
		Quindi si esce in cresta che fortunatamente non e' mai esposta. Si alternano tratti meno ripidi su sfasciumi 
		(occorre non muovere sassi per evitare finiscano in testa a quelli che risalgono la f.lla Valdarcia) o su 
		placchette di pochi metri, appoggiate, da scalare anche in aderenza con 
		gli scarponi. Gli ultimi metri sono 
		su cresta molto solida. 30/40 min dalla forcella. Panorama ottimo, 
		pochi ometti e roccia pressochè vergine.`

    let fotoPuntaNera = []
    let foto61 = {path: 'cadore/PuntaNera_01.jpg', desc: 'Attacco della breve via'}
    let foto62 = {path: 'cadore/PuntaNera_02.jpg', desc: 'Terreno instabile'}
    let foto63 = {path: 'cadore/PuntaNera_03.jpg', desc: 'In cresta'}
    let foto64 = {path: 'cadore/PuntaNera_04.jpg', desc: 'Tutta la dorsale da forcella di Punta Nera'}
    fotoPuntaNera.push(foto61)
    fotoPuntaNera.push(foto62)
    fotoPuntaNera.push(foto63)
    fotoPuntaNera.push(foto64)
  
    let descPuntaNera = `Facile via normale in ambiente grandioso al cospetto del Sorapiss. Dal Passo Tre croci
    seguire lungamente il sentiro 213 per poi confluire al 215, che si risale fino a poche decine di metri prima
    della Sella di Punta Nera, dove inizia la normale arrampicando a destra per facili roccette e canalini fino in cresta.
    Poi ancora qualche passo di I tra massi appoggiati. Rientro per l'affollato Lago del Sorapiss.`
  
    let fotoSassolungoCibiana = []
    let foto65 = {path: 'cadore/SassolungoCibiana01.jpg', desc: 'Sotto la dorsale sud'}
    let foto66 = {path: 'cadore/SassolungoCibiana02.jpg', desc: 'Passaggio su roccette'}
    let foto67 = {path: 'cadore/SassolungoCibiana03.jpg', desc: 'In cresta'}
    let foto68 = {path: 'cadore/SassolungoCibiana04.jpg', desc: 'Ultimo canale prima della cupola sommitale'}
    fotoSassolungoCibiana.push(foto65)
    fotoSassolungoCibiana.push(foto66)
    fotoSassolungoCibiana.push(foto67)
    fotoSassolungoCibiana.push(foto68)
  
    let descSassolungoCibiana = `Via normale 
    per la dorsale sud. Dl passo di Cibiana si sale a Forc. Bela per poi perdere 
    quota in versante Campestrin. Puntando una traccia sotto le pareti della 
    bastionata sud del Sassolungo si contorna il catino ghiaioso e si prosegue 
    in leggera pendenza sotto i canaloni che scendono dalla linea di cresta. 
    Superate delle placchette rocciose si affronta con decisione a sinistra una 
    pala ricoperta di mughi, forzando i passaggi ostruiti. La traccia è precaria. 
    Raggiunta faticosamente la cresta la si percorre lungamente senza difficoltà 
    apprezzabili fino al grande cocuzzolo finale che si guadagna risalendo un 
    facile canalone con alcuni passi di I (bolli rossi). Discesa per la stessa 
    via prestando attenzione al momento di ridiscendere verso il Campestrin.`
  
    let fotoPopera = []
    let foto69 = {path: 'cadore/popera01.JPG', desc: 'Cima Undici e cresta Zsigmondy'}
    let foto70 = {path: 'cadore/popera02.JPG', desc: 'Croda dei Toni'}
    let foto71 = {path: 'cadore/popera03.JPG', desc: 'Via Normale'}
    let foto72 = {path: 'cadore/popera04.JPG', desc: 'Tre Cime'}
    fotoPopera.push(foto69)
    fotoPopera.push(foto70)
    fotoPopera.push(foto71)
    fotoPopera.push(foto72)
  
    let descPopera = `Prima di forcella Giralba, 
		versante Val Fiscalina, si prende a sinistra la Strada degli Alpini 
		fino a superare un piccolo orrido su comoda cengia in discesa. Da li si 
		abbandona per inoltrarsi a destra nella Busa di Dentro. La si 
		risale tutta prima su falsopiano e poi su ripido ghiaione fino a 
		portarsi alla base dei terrazzamenti rocciosi che conducono alla cresta 
		del Popera. Per facili balze e cenge ci si sposta sul lato destro della 
		parete ove la normale segue una crestina appoggiata di circa 40m, I 
		continuo con alcuni passi I+, roccia buona. Alternativamente si può 
		risalire il canale detritico che si sviluppa appena alla destra dello 
		spigolo. In vista dell'ampia cresta terminale le difficoltà diminuiscono 
		e si cammina quasi sempre, arrivando velocemente alla croce di vetta con 
		impagabili panorami su Cima Undici, Croda dei Toni, Tre Scarperi...`

    let fotoMontePelmo = []
    let foto73 = {path: 'cadore/pelmo_01.jpg', desc: 'Attacco della cengia di Ball'}
    let foto74 = {path: 'cadore/pelmo_02.jpg', desc: 'Verso l\'imbocco del van'}
    let foto75 = {path: 'cadore/pelmo_03.jpg', desc: 'Il Pelmetto dalla normale'}
    let foto76 = {path: 'cadore/pelmo_04.jpg', desc: 'Il passo del gatto'}
    fotoMontePelmo.push(foto73)
    fotoMontePelmo.push(foto74)
    fotoMontePelmo.push(foto75)
    fotoMontePelmo.push(foto76)
  
    let descMontePelmo = `Salita da Coi, in giornata. Andata e ritorno per la ben nota e 
    documentata cengia di Ball. Si trovano svariati cordini per auto assicurazione di dubbia
    affidabilità. Personalmente ritengo il Passo dello Stemma, che si incontra nella prima parte
    della cengia, il passaggio chiave, soprattutto in virtù della esposizione totale. Finita la cengia
    la parte alta della via, in condizioni estive, è decisamente più facile, ma occorre sempre valutare 
    che si deve ripercorrere la cengia al ritorno, con un fardello di stanchezza aggiuntivo.` 

    
return (
  <div className='row App'>
    <div className='col-sm-2 colLeft'>
      <Sidebar />
        </div>
        <div className='col-sm-10'>
        <span id="1"></span>
        <Gita title='La Cesta' quota='2768m' dislivello='970m' difficolta='I+/II-/PD-' descrizione={descCesta} foto={fotoCesta} ></Gita>
        <span id="2"></span>
        <Gita title='Monte Aiarnola' quota='2456m' dislivello='1050m' difficolta='EE/F' descrizione={descAjarnola} foto={fotoAiarnola} ></Gita>
        <span id="3"></span>
        <Gita title='Cima Belprà' quota='2917m' dislivello='150+1150m' difficolta='II-' descrizione={descBelpra} foto={fotoBelPra} ></Gita>
        <span id="4"></span>
        <Gita title='Pelmetto' quota='2990m' dislivello='1480m' difficolta='II-/IV-/AD-' descrizione={descPelmetto} foto={fotoPelmetto} ></Gita>
        <span id="5"></span>
        <Gita title='Cimon del Froppa' quota='2932m' dislivello='1250+750m' difficolta='II-/III/PD+' descrizione={descFroppa} foto={fotoFroppa} ></Gita>
        <span id="6"></span>
        <Gita title='Corno del Doge' quota='2615m' dislivello='1600m' difficolta='II-/F+' descrizione={descDoge} foto={fotoDoge} ></Gita>
        <span id="7"></span>
        <Gita title='Piz Popena' quota='3152m' dislivello='~1500m' difficolta='II+/AD-' descrizione={descPopena} foto={fotoPopena} ></Gita>
        <span id="8"></span>
        <Gita title='Monte Cristallo' quota='3221m' dislivello='~1450m' difficolta='II+/PD' descrizione={descCristallo} foto={fotoCristallo} ></Gita>
        <span id="9"></span>
        <Gita title='Sorapiss' quota='3205m' dislivello='~1600m' difficolta='II-/III/PD' descrizione={descSorapiss} foto={fotoSorapiss} ></Gita>
        <span id="10"></span>
        <Gita title='Cima di Valdarcia + giro del Pelmo' quota='2624m' dislivello='~1000m' difficolta='II-/F+' descrizione={descCimaValdarcia} foto={fotoCimaValdarcia} ></Gita>
        <span id="11"></span>
        <Gita title='Punta Nera' quota='2847m' dislivello='1100m' difficolta='II-/F+' descrizione={descPuntaNera} foto={fotoPuntaNera} ></Gita>
        <span id="12"></span>
        <Gita title='Sassolungo di Cibiana' quota='2413m' dislivello='1400m' difficolta='I/EE' descrizione={descSassolungoCibiana} foto={fotoSassolungoCibiana} ></Gita>
        <span id="13"></span>
        <Gita title='Monte Popera' quota='3046m' dislivello='1000+800m' difficolta='I+/F+' descrizione={descPopera} foto={fotoPopera} ></Gita>
        <span id="14"></span>
        <Gita title='Monte Pelmo' quota='3168m' dislivello='1650m' difficolta='II-/PD-' descrizione={descMontePelmo} foto={fotoMontePelmo} ></Gita>
        </div>  
    </div>        
  );
}