import React from 'react'
import Gita from "../Components/Gita"
import Sidebar from '../Components/Sidebar'

export default function Bellunesi() {

    let fotoSassMura = []
    let foto1 = {path: 'bellunesi/SassDeMura01.jpg', desc: 'Verso cima Est'}
    let foto2 = {path: 'bellunesi/SassDeMura02.jpg', desc: 'Camino di II'}
    let foto3 = {path: 'bellunesi/SassDeMura03.jpg', desc: 'Piz de Sagron e Piz de Mez'}
    let foto4 = {path: 'bellunesi/SassDeMura04.jpg', desc: 'Parete iniziale'}
    let foto5 = {path: 'bellunesi/SassDeMura05.jpg', desc: 'Dal Pass de Mura'}
    let foto6 = {path: 'bellunesi/SassDeMura06.jpg', desc: 'L\'amico Damiano'}
    fotoSassMura.push(foto1)
    fotoSassMura.push(foto2)
    fotoSassMura.push(foto3)
    fotoSassMura.push(foto4)
    fotoSassMura.push(foto5)
    fotoSassMura.push(foto6)
  
    let descSassMura = `Si perviene a 
    forcella Neva senza Difficoltà. Presa la cresta verso il monte si supera 
    un intaglio (3m II-), poi lungamente con modesta pendenza fino alla 
    spalla che volge verso la parete sud (veduta della finestra). Qui si 
    prende una cengia verso sinistra che porta all'attacco. Si deve superare 
    una parete di 10m, verticale, roccia solida, II, un passo II+. Quindi 
    verso destra (sud) per cengia pochi metri, fino ad un camino (8m II- e 
    II). Piu' oltre lungo la cresta sud si deve superare una paretina di 5m 
    I+ e poi lungamente per cresta aerea, ma mai esposta, fino alla cima 
    (libretto in un contenitore metallico). La prosecuzione verso cima Est 
    e' sembrata molto delicata (osservando un alpinista che l'ha percorsa).`

    let foto3Pietre = []
    let foto7 = {path: 'bellunesi/3Pietre01.jpg', desc: 'Il Pizzocco'}
    let foto8 = {path: 'bellunesi/3Pietre02.jpg', desc: 'Casera Bosc dei Buoi'}
    foto3Pietre.push(foto7)
    foto3Pietre.push(foto8)
  
    let desc3Pietre = `Partiti dalle Marianne si sale verso il Palmar, lasciandolo pero' a sinistra per poi
    risalire in van erboso ripido che porta alla cresta del Cimone. Si giunge in
    cima senza difficolta' ma su pendenze rispettabili (1330 dislivello fin qui,
    2h e mezza). Poi in direzione del Tre Pietre per cresta senza difficolta'. Occorre perdere
    circa 100m sempre sul versante sud e poi si risale per facili canali misto
    erba-roccia. Ci si cala per 2m nel versante nord poco prima della vetta
    macchiata di mughi nei paraggi (3h e 10min). Grande visione su Pizzocco e
    Sass de Mura/Comedon. Il ritorno l'abbiam fatto seguendo la cresta verso
    ovest. Non lontano ancora dalla cima si scalano 5m di I fino un intaglio ove
    si trova un anello metallico che permette di far una calata di corda sui 7/8
    m della parete sottostante (altrimenti II e III in arrampicata).
    Altrenativamente si scende in piena esposizione sul versante nord per questi
    pochi metri (II-). Quindi si guadagna la forcella prativa con 3
    caratteristici gendarmi e poi a casera Bosc dei Buoi su traccia molto
    incerta tra mughi e faggeto. Per chiudere il giro siamo risaliti al Palmar e
    poi giu' alle Marianne tagliando nel bosco.`

    let fotoBocaRosp = []
    let foto9 = {path: 'bellunesi/BocaDelRosp_01.jpg', desc: 'Sulle loppe'}
    let foto10 = {path: 'bellunesi/BocaDelRosp_02.jpg', desc: 'In cima'}
    fotoBocaRosp.push(foto9)
    fotoBocaRosp.push(foto10)
  
    let descBocaRosp = `Abbiamo
    raggiunto la cima seguendo la cresta ovest dei pendii rivolti a sud. Si
    incontrano tratti alquanto ripidi, sui 45% che sconsigliano assolutamente
    la caduta. Personalmente nella discesa ho indossato i ramponi per un tratto.`

    let fotoBurel = []
    let foto11 = {path: 'bellunesi/cimaBurel01.jpg', desc: 'Ore 9 in cima al Burel'}
    let foto12 = {path: 'bellunesi/burel1.jpg', desc: 'Il Burel'}
    fotoBurel.push(foto11)
    fotoBurel.push(foto12)
  
    let descBurel = `Dal Bianchet, forcella del Balcon (tratti di I) poi attraverso ghiaioni al van del 
    Burel. Primo canalino a sx 4m con passaggio di II, poi traversata su 
    cengia e secondo canalino (I e 3m II), si esce in cresta prossimi alla 
    cima. A scendere risalita a forcella Sperti e poi ferrata Sperti fino al 
    VII Alpini.`

    let fotoFratta = []
    let foto13 = {path: 'bellunesi/frattaDelMoro01.jpg', desc: 'In vista del Burel'}
    let foto14 = {path: 'bellunesi/frattaDelMoro02.jpg', desc: 'Sulla cengia in Val Ru da Molin'}
    fotoFratta.push(foto13)
    fotoFratta.push(foto14)
  
    let descFratta = `Percorsa tutta Val Ru da Molin, poi a 
    destra verso il Forzelon. Giunti in vista dela forcella prima di 
    traversare un torrente si piega a sinistra. Salita molto faticosa, 
    ultimi 200m con neve alta. Visione paurosa dalla sommità est verso la 
    parete ovest del Burel e verso Val de Piero. La Val Ru da Molin 
    presenta una cengia molto aerea in alcuni tratti, e nella zona centrale 
    un paio di passaggi sempre su cengia abbastanza impegnativi per 
    l'esposizione.`

    let fotoNeva = []
    let foto15 = {path: 'bellunesi/MonteNeva-01.jpg', desc: 'Inizio del canale'}
    let foto16 = {path: 'bellunesi/MonteNeva-02.jpg', desc: 'Balze'}
    let foto17 = {path: 'bellunesi/MonteNeva-03.jpg', desc: 'Passo del gatto'}
    let foto18 = {path: 'bellunesi/MonteNeva-04.jpg', desc: 'Piz de Mez'}
    fotoNeva.push(foto15)
    fotoNeva.push(foto16)
    fotoNeva.push(foto17)
    fotoNeva.push(foto18)
    let descNeva = `Il percorso doveva essere 
    teoricamente segnato ma, pure avevo un ricordo di una deviazione 
    segnalata tornando dalla cima ovest del Sass de mura, proseguiamo troppo 
    oltre verso la forcella Neva senza trovare il punto di scarto. 
    Consultiamo la Tabacco e l'indicazione ci porta a ridiscendere un tratto 
    ed attaccare un ampio canalone senza traccia di passaggio/ometti. 
    Evitiamo un primo colatoio piuttosto ripido tenendoci sulle loppe alla 
    destra e poi traversiamo un 50m tra baranci per riportarci nel greto, 
    ora più abbordabile. L'idea che non possa essere la via normale di 
    salita prende corpo, nondimeno guadagniamo quota mirando alla forcella 
    che intaglia la cresta sommitale. Alcuni passaggi risultano un po' 
    scabrosetti con abbondante detrito sotto le suole (I, qualche passo I+). 
    Ad un possible bivio notiamo qualcosa somigliante ad un ometto giusto 
    all'uscita di un'esile cengetta (destra salendo). Superatala con passo 
    del gatto e bagnato, si accede velocemente alla calotta finale, dove 
    finalmente si torna in posizione bipede. Ancora una occhiata alla 
    cartina e ci convinciamo che deve esserci un altra via per scendere. 
    Infatti proseguendo in direzione ovest sulla cresta ci si trova subito a 
    percorrere una traccia di sentiero ben evidente. Il giro sarà quindi ad 
    anello, ma con una curva verso ovest molto più pronunciata di quella 
    indicata sulla Tabacco, per poi rientrare sul segnavia CAI in 
    corrispondenza della malga già incontrata all'andata.`

    let fotoCajada = []
    let foto19 = {path: 'bellunesi/pelfDaCajada.jpg', desc: 'Il Pelf da Cajada'}
    let foto20 = {path: 'bellunesi/moschesinDaCajada.jpg', desc: 'Moschesin/Pramper da Cajada'}
    fotoCajada.push(foto19)
    fotoCajada.push(foto20)
  
    let descCajada = `Arrivati fino nei pressi delle rampe finali. Ritirati per raffiche di 
    vento e pendio nevoso molto ripido con esposizione a nord (senza ramponi 
    e piccozza). A scendere percorso libero prima di arrivare alle selle di 
    Gravedel su erba bagnata e canali innevati.`

    let fotoPinei = []
    let foto21 = {path: 'bellunesi/pinei01.jpg', desc: 'Discesa attrezzata'}
    let foto22 = {path: 'bellunesi/pinei02.jpg', desc: 'Su placche'}
    fotoPinei.push(foto21)
    fotoPinei.push(foto22)
  
    let descPinei = `Da forcella Mompiana spostandosi verso il 
    Tiron si perviene ad un'ulteriore forcella da dove parte il troi de 
    panza (cartello in legno). Il percorso e' piuttosto selvaggio e segnato 
    a vernice gialla, ma richiede un po' di attenzione per non perdere la 
    traccia. Si devono effettuare parecchi sali-scendi e superare un tratto 
    attrezzato. Dopo 4 ore da forcella mompiana e superati alcuni passaggi 
    un po' esposti, ci siamo fermati in una delle svariate gole che 
    scendono dalle pale dei Pinei. Occorreva scendere una rampa molto ripida 
    e friabile senza alcuna possibilita' di assicurazione e con circa 100m 
    di salto sotto. Probabilmente affrontando il giro dal lato opposto si 
    alleviano le difficolta' (partendo dal VII Alpini). Al ritorno siamo 
    scesi direttamente per bosco in val d'Art, trovando una gola che ha 
    consentito di evitare dei salti rocciosi. Dieci ore di cammino quasi 
    ininterrotte.`

    let fotoPizzocco = []
    let foto23 = {path: 'bellunesi/pizocco01.jpg', desc: '3 Pietre'}
    let foto24 = {path: 'bellunesi/pizocco02.jpg', desc: 'Schiara'}
    fotoPizzocco.push(foto23)
    fotoPizzocco.push(foto24)
  
    let descPizzocco = `Saliti dalla chiesetta di S. Felice. Usciti dalle nuvole 
    quasi al rifugio Ere, poi giornata stupenda e visuale importante dalla 
    cima, con le Pale schierate a nord e tutta la val Belluna sotto di noi.`

    let fotoBalconi = []
    let foto25 = {path: 'bellunesi/balconi01.jpg', desc: 'Calata nel canalone bagnato'}
    let foto26 = {path: 'bellunesi/balconi02.jpg', desc: 'La parete appoggiata da risalire'}
    let foto27 = {path: 'bellunesi/balconi03.jpg', desc: 'Il Cor'}
    let foto28 = {path: 'bellunesi/balconi04.jpg', desc: 'Catena dell\'Agner verso sud'}
    let foto29 = {path: 'bellunesi/balconi05.jpg', desc: 'Catena settentrionale delle Pale di San Martino'}
    fotoBalconi.push(foto25)
    fotoBalconi.push(foto26)
    fotoBalconi.push(foto27)
    fotoBalconi.push(foto28)
    fotoBalconi.push(foto29)
    let descBalconi = `Saliti da Gares per casera Campigat, e giro ad anello per le Pale dei Balconi. 
    Consigliato l'uso della corda nella discesa del canalone bagnato. La parete nord poi può presentare
    problemi di orientamento, mentre le difficoltà si mantengono massimo sul I, misto erba. Dal Cor la risalita alla
    Cima dei Balconi oppone ancor difficoltà di I, mentre la discesa in versante ovest verso le Pale dei Balconi
    si sviluppa su cengia molto stretta ed esposta in un paio di circostanze. Da lì in poi l'anello si chiude con
    impegno escursionistico.`

    let fotoPaleMola = []
    let foto30 = {path: 'bellunesi/ReceDelGat_01.jpg', desc: 'Cartello vintage'}
    let foto31 = {path: 'bellunesi/ReceDelGat_02.jpg', desc: 'Ripido finale'}
    let foto32 = {path: 'bellunesi/ReceDelGat_03.jpg', desc: 'Sas de Mel'}
    let foto33 = {path: 'bellunesi/ReceDelGat_04.jpg', desc: 'Sud della Schiara'}
    fotoPaleMola.push(foto30)
    fotoPaleMola.push(foto31)
    fotoPaleMola.push(foto32)
    fotoPaleMola.push(foto33)
    let descPaleMola = `La salita 
	inizia a Ponte Mariano in val d'Art a circa mezz'ora da case Bortot. 
	Risaliamo la Pala Bernarda per bosco di faggi e conifere fino a sbucare nei 
	paraggi del Biv. Medassa. Dal ricovero, incassato nella roccia, si 
	stacca il sentiero che porta alla forcella Pis Pilon. Lo si segue fino ad un 
	evidente abete rosso, ove conviene virare a sinistra su per l'invitante pala 
	erbosa. Si mantiene la destra del declivio piuttosto ripido per poi puntare 
	la sommità più alta in faticosa arrampicata vegeto-minerale, su loppe ripide 
	ma non impossibili. Si guadagna così la recia più alta che offre una 
	visione ideale sulla sud della Schiara. Scendendo si può facilmente calcare 
	la sommità minore (a sud).`

    let fotoZimonTerne = []
    let foto34 = {path: 'bellunesi/ZimonTerne01.jpg', desc: 'Schiara e Pelf'}
    let foto35 = {path: 'bellunesi/ZimonTerne02.jpg', desc: 'Passaggio assicurato'}
    let foto36 = {path: 'bellunesi/ZimonTerne03.jpg', desc: 'Pala bassa verso Bus Del Diaol e Agner'}
    let foto37 = {path: 'bellunesi/ZimonTerne04.jpg', desc: 'Burel'}
    let foto38 = {path: 'bellunesi/ZimonTerne05.jpg', desc: 'Assicurazione su larice'}
    let foto39 = {path: 'bellunesi/ZimonTerne06.jpg', desc: 'Parete nord-ovest'}
    fotoZimonTerne.push(foto34)
    fotoZimonTerne.push(foto35)
    fotoZimonTerne.push(foto36)
    fotoZimonTerne.push(foto37)
    fotoZimonTerne.push(foto38)
    fotoZimonTerne.push(foto39)
  
    let descZimonTerne = `Da forcella Mompiana si prende la cresta del Terne aggirando a sinistra (est)
    un primo risalto, per poi attaccare una ripida pala mista loppa-roccette.
    A meta' di questa abbiam fatto assicurazione su albero, superando un paio
    di metri di II. Alternativamente si puo' stare piu' a sinistra ma senza
    assicurazione. Quindi, verso sinistra si costeggia un risalto roccioso
    abbastanza ripidamente per poi sbucare ancora in cresta. Dopo un po' di
    saliscendi e superato anche un tratto a dorso di mulo si
    perviene ad una cengetta esposta sul versante ovest. Dopo questa si scende
    di una ventina di metri per poi risalire all'ultimo intaglio che conduce
    alla rampa terminale della montagna. Anche quest'ultima assume pendenza
    considerevole prima delle ultime roccette finali. Panorama superbo verso
    nord, circa 4h in salita e 1 e mezza in discesa da sud.`

    let fotoTalvena = []
    let foto40 = {path: 'bellunesi/Talvena01.jpg', desc: 'Formazioni sulle cime di Zita'}
    let foto41 = {path: 'bellunesi/Talvena02.jpg', desc: 'In cima alla Talvena '}
    fotoTalvena.push(foto40)
    fotoTalvena.push(foto41)
  
    let descTalvena = `Avvicinamento 
    lungo dalla Val Pramper per la Costa del Barancion, forc. de Zita' Sud, 
    forc. degli Erbandoi. La cresta e' facile (forse qualche passo di I-) 
    ma un po' malsicura per le roccette instabili. Panorama grandioso.`

    let fotoTanzon = []
    let foto42 = {path: 'bellunesi/Tanzon02.jpg', desc: 'Cengia Pala Bassana'}
    let foto43 = {path: 'bellunesi/Tanzon01.jpg', desc: 'Sas de Mel'}
    fotoTanzon.push(foto42)
    fotoTanzon.push(foto43)
  
    let descTanzon = `Da Cajada si prosegue per F.lla Caneva per poi piegare a
    destra nel bosco senza tracce nei pressi dei ruderi di casera. Faticosamente
    si perviene ai salti che conducono all'erbosa cengia della Pala Bassana.Si
    devono guadagnare un 7/8 m alternativamente passando per ripida cengetta
    erbosa esposta, o salendo in un canale (II) o ancora spostandosi piu' avanti
    e risalendo la spalla rocciosa (II-, appoggiato, appigli piccoli ma
    abbondanti). Si arriva quindi nei pressi di un camino verticale di una
    ventina di metri. La via sale a destra per misto erba roccia con scarse
    possibilita' di assicurazione ed esposizione nei primi metri. Qui siamo
    tornati per poi salire a cima Tanzon da forcella Caneva e ritorno per
    forcella Tanzon.`

    let fotoSpizGalina = []
    let foto44 = {path: 'bellunesi/spizGalina01.jpg', desc: 'In cima'}
    fotoSpizGalina.push(foto44)
  
    let descSpizGalina = `La via parte ad uno stretto intaglio sul 
    versante sud-est. Aiutandosi con una catena si supera un salto verticale 
    di 5m. Poi ci si inerpica per un costone, nel nostro caso ghiacciato con 
    sicurezza di corda. Dopo un tratto nel bosco meno ripido si arriva alla 
    base del canale erboso principale. Circa 150m di loppe e radi mughi o 
    carpini. La pendenza e' molto elevata. Abbiamo fatto tre tiri di corda 
    da 50m circa. Si esce quindi in cresta da dove ci si sposta verso la 
    vetta tenendosi sul versante est (percorso obbligato). L'ultimo tratto 
    e' alquanto vertiginoso. Altrenativamente si possono salire gli ultimi 
    metri affrontando un salto di 3m meno esposto (III). A scendere sempre 
    con la corda fino alla catena.`

    let fotoColSiron = []
    let foto45 = {path: 'bellunesi/Siron1.jpg', desc: 'Il Col Siron da ovest'}
    let foto46 = {path: 'bellunesi/Siron2.jpg', desc: 'Ripidi prati a est del Col Siron'}
    let foto47 = {path: 'bellunesi/Siron3.jpg', desc: 'La cresta di salita da sud'}
    let foto48 = {path: 'bellunesi/Siron4.jpg', desc: 'Gruppo del Bosconero innevato'}
    fotoColSiron.push(foto45)
    fotoColSiron.push(foto46)
    fotoColSiron.push(foto47)
    fotoColSiron.push(foto48)
    let descColSiron = `Lasciata 
	l'auto al parcheggio di Olantreghe si prende la comoda mulattiera diretta a 
	casera Busnik. Giunti in località Col, presenza di segnavia CAI, si piega 
	liberamente a sinistra nel bosco, superando in saliscendi alcune doline che 
	portano alla base dei ripidi prati, macchiati di mughi, sul versante est del 
	Col Siron. Si individua subito lo stretto intaglio di forcella, tra i verdi, 
	alla sinistra del corpo principale delle verticali pareti est del monte. Si 
	risale verso la forcella evitando i mughi e si prende, la cresta sud, prima 
	aggirando in versante oves un torrione e poi seguendo i rari tagli tra i 
	mughi, fino alla base del cocuzzolo finale, da attaccare in versante ovest 
	per evitare alcuni spuntoni rocciosi.`

    let fotoCimePez = []
    let foto49 = {path: 'bellunesi/cimePez01.jpg', desc: 'La catena delle Cime dei Pez'}
    let foto50 = {path: 'bellunesi/cimePez02.jpg', desc: 'Il Burel ammantato di neve'}
    let foto51 = {path: 'bellunesi/cimePez03.jpg', desc: 'L\'imponente Talvena da sud'}
    fotoCimePez.push(foto49)
    fotoCimePez.push(foto50)
    fotoCimePez.push(foto51)
    let descCimePez = `Si parte dal Bus de la Pissa in val Cordevole, prendendo le scalette del sentiero si che ricongiunge alla strada del Bianchet.
    Si abbandona il 503 quando attraversa il torrente, per volgere a sinstra su tracce in direzione di Casere Vescovà. Prima di raggingerle si piega ancora a sinistra per ripide pale erbose e girando
    in direzione di Val vescovà si entra nei van creati dalle varie quote delle Cime dei Pez...si può decidere quali salire fino alle sommità, sempre su loppe ripide.`

    let fotoMonteCoro = []
    let foto52 = {path: 'bellunesi/monteCoro01.jpg', desc: 'Finalmente si svalica...'}
    let foto53 = {path: 'bellunesi/monteCoro02.jpg', desc: 'Uscita del Boral de l\'Ors'}
    let foto54 = {path: 'bellunesi/monteCoro03.jpg', desc: 'Canalino verso la vetta'}
    let foto55 = {path: 'bellunesi/monteCoro04.jpg', desc: 'La Spirlonga sotto di noi'}
    fotoMonteCoro.push(foto52)
    fotoMonteCoro.push(foto53)
    fotoMonteCoro.push(foto54)
    fotoMonteCoro.push(foto55)
    let descMonteCoro = `Si parte dal Bus de la Pissa in val Cordevole, prendendo le scalette del sentiero si che ricongiunge alla strada del Bianchet.
    Dopo il rifugio si seguono le evidenti indicazioni per il Coro verso desta (ovest). 
    Escursione molto lunga dovendo rientrare quasi fino alla testata della val Cordevole per calcare la Cima.`

    let fotoPeverele = []
    let foto56 = {path: 'bellunesi/peverele01.jpg', desc: 'Verso le Peverele'}
    let foto57 = {path: 'bellunesi/peverele02.jpg', desc: 'Scorcio sulla Schiara'}
    let foto58 = {path: 'bellunesi/peverele03.jpg', desc: 'Viaz nord-orientale'}
    let foto59 = {path: 'bellunesi/peverele04.jpg', desc: 'Parete nord del Serva'}
    fotoPeverele.push(foto56)
    fotoPeverele.push(foto57)
    fotoPeverele.push(foto58)
    fotoPeverele.push(foto59)
    let descPeverele = `Da Cajada, per casera Zervoi. Si superano alcuni passaggi di I e tratti con loppe ripide (consigliati ramponcini).
    Proseguito poi in discesa per verdi e poi a prendere la traccia che taglia l'impressionante parete nord del Serva 
    (ancora I delicato e una calata in doppia evitabile). Ci troviamo quindi a percorrere il
    viaz nord-orientale del Serva con marcati sali-scendi, e poi sul mansueto versante sud fino al Cargador (servono 2 auto). `


    
return (
    <div className='row App'>
        <div className='col-sm-2 colLeft'>
        <Sidebar />
        </div>
        <div className='col-sm-10'>         
        <Gita title='Sass de Mura - Cima Ovest'  quota='2520m' dislivello='~1500m' difficolta='II/II-' descrizione={descSassMura} foto={fotoSassMura} ></Gita>
        <Gita title='Monte Tre Pietre'  quota='1965m' dislivello='1670m' difficolta='II-' descrizione={desc3Pietre} foto={foto3Pietre} ></Gita>
        <Gita title='Boca de Rosp'  quota='1635m' dislivello='600m' difficolta='F-' descrizione={descBocaRosp} foto={fotoBocaRosp} ></Gita>
        <Gita title='Burel'  quota='2281m' dislivello='~1800m' difficolta='I/II-/F+' descrizione={descBurel} foto={fotoBurel} ></Gita>
        <Gita title='Fratta del Moro'  quota='1673m' dislivello='1380m' difficolta='EE' descrizione={descFratta} foto={fotoFratta} ></Gita>
        <Gita title='Monte Neva'  quota='2228m' dislivello='1110m' difficolta='I+/EE' descrizione={descNeva} foto={fotoNeva} ></Gita>
        <Gita title='Tentativo al Zimon (Cajada)'  quota='1750m' dislivello='~700m' difficolta='EE' descrizione={descCajada} foto={fotoCajada} ></Gita>
        <Gita title='Forcella Mompiana e troi de panza Gruppo della Schiara, pale dei Pinei - tentativo'  quota='~1700m' dislivello='~1400m' difficolta='I+/II-' descrizione={descPinei} foto={fotoPinei} ></Gita>
        <Gita title='Pizzocco'  quota='2186m' dislivello='1350m' difficolta='I+/II-' descrizione={descPizzocco} foto={fotoPizzocco} ></Gita>
        <Gita title='Cima dei Balconi/Cor/Pale dei Balconi'  quota='2621m' dislivello='~1400m' difficolta='II/I/F+' descrizione={descBalconi} foto={fotoBalconi} ></Gita>
        <Gita title='Pale de la Mola'  quota='1832m' dislivello='~1300m' difficolta='EE' descrizione={descPaleMola} foto={fotoPaleMola} ></Gita>
        <Gita title='Zimon del Terne'  quota='1832m' dislivello='~1300m' difficolta='EE' descrizione={descZimonTerne} foto={fotoZimonTerne} ></Gita>
        <Gita title='La Talvena'  quota='2542m' dislivello='~1500m' difficolta='EE' descrizione={descTalvena} foto={fotoTalvena} ></Gita>
        <Gita title='Cima Tanzon / Tentativo cengia Pala Bassana'  quota='1926m' dislivello='900m' difficolta='E' descrizione={descTanzon} foto={fotoTanzon} ></Gita>
        <Gita title='Spiz Galina'  quota='1545m' dislivello='870m' difficolta='II/PD' descrizione={descSpizGalina} foto={fotoSpizGalina} ></Gita>
        <Gita title='Col Siron'  quota='1671m' dislivello='1030m' difficolta='I/F' descrizione={descColSiron} foto={fotoColSiron} ></Gita>
        <Gita title='Cime dei Pez'  quota='2075m' dislivello='~1700m' difficolta='EE' descrizione={descCimePez} foto={fotoCimePez} ></Gita>
        <Gita title='Monte Coro'  quota='1985m' dislivello='~1600m' difficolta='EE' descrizione={descMonteCoro} foto={fotoMonteCoro} ></Gita>
        <Gita title='Peverele (Serva)'  quota='1851m' dislivello='~900m' difficolta='I/F' descrizione={descPeverele} foto={fotoPeverele} ></Gita>
        </div>  
    </div>        
    );
}