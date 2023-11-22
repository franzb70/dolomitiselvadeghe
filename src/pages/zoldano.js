import React from 'react'
import Gita from "../Components/Gita"
import Sidebar from '../Components/Sidebar'

export default function Zoldano() {

  let fotoForzelete = []
  let foto1 = {path: 'zoldano/forzelete-01.jpg', desc: 'Il canale giusto'}
  let foto2 = {path: 'zoldano/forzelete-02.jpg', desc: 'Su ghiaione ripido'}
  let foto3 = {path: 'zoldano/forzelete-03.jpg', desc: 'La Gardesana dalla vetta'}
  let foto4 = {path: 'zoldano/forzelete-04.jpg', desc: 'Passo esposto in vetta'}
  fotoForzelete.push(foto1)
  fotoForzelete.push(foto2)
  fotoForzelete.push(foto3)
  fotoForzelete.push(foto4)

  let descForzelete = `Da Ponte di Caleda si segue il sentiero diretto al Pramperet fino ad evidente segnalazione a sinistra per F.lla Larga (di Moschesin), 1h circa. 
  Risalire faticosamente tutto il ghiaione, tenendosi prevalentemente sulla destra negli ultimi 100m, 1h circa. 
  Da qui si attacca decisamente il ghiaione a sinistra che scende dalle Forzelete. Si prosegue duramente accanto alla barriera rocciosa fin quando si apre una conca. 
  A questo punto NON bisogna seguire troppo a sinistra la prosecuzione del ghiaione e NON bisogna puntare troppo a destra una evidente forcella che porterebbe verso il van del Tamer. 
  Il canale giusto e quello centrale, spostato leggermente a sinistra, roccioso fin dalla base. 
  Raggiunto l'attacco si risale il canale: due alternative, tutto a sinistra per terriccio ripido adiacente le rocce, oppure verso destra con facili passi di I grado. 
  In pochi minuti si raggiunge lo stretto intaglio di forcella da dove si attacca la breve via normale, 0,45h da F.lla Larga. 
  Superato un muretto iniziale si aggira verso sinistra un'anticima fino in vista del conoide detritico finale che si risale su traccia mantenendosi al centro, lontani dall'esposizione. 
  Preoccupano un po' gli ultimi metri, aggirando a destra il blocco di vetta, dovendo passare in esposizione su terreno ripido. Conviene stare ben attaccati alla roccia, I. 
  La vetta e' molto stretta, ci stanno al massimo 3/4 persone. Discesa per la stessa via, senza 
  possibilità di guadagnare gran che sul tempo di salita (poco meno di 6h complessive).`

  let fotoPramperet = []
  let foto5 = {path: 'zoldano/Pramperet_00.jpg', desc: 'Cadin di Cornia'}
  let foto6 = {path: 'zoldano/Pramperet_00b.jpg', desc: 'Accesso alla forcella tra Pramper e Pramperet'}
  let foto7 = {path: 'zoldano/Pramperet_01.jpg', desc: 'Tratto esposto in cengia'}
  let foto8 = {path: 'zoldano/Pramperet_02.jpg', desc: 'Su detriti'}
  let foto9 = {path: 'zoldano/Pramperet_03.jpg', desc: 'Uscita della cengia'}
  let foto10 = {path: 'zoldano/Pramperet_04.jpg', desc: 'In cresta tra massi instabili'}
  let foto11 = {path: 'zoldano/Pramperet_05.jpg', desc: 'Di ritorno sul tratto esposto'}
  let foto12 = {path: 'zoldano/Pramperet_06.jpg', desc: 'Pramper sullo sfondo'}
  fotoPramperet.push(foto5)
  fotoPramperet.push(foto6)
  fotoPramperet.push(foto7)
  fotoPramperet.push(foto8)
  fotoPramperet.push(foto9)
  fotoPramperet.push(foto10)
  fotoPramperet.push(foto11)
  fotoPramperet.push(foto12)

  let descPramperet = `Via normale al Pramperet.`

  let fotoToanella = []
  let foto13 = {path: 'zoldano/toanella01.jpg', desc: 'Sul ripido verso forc. Toanella'}
  let foto14 = {path: 'zoldano/toanella02.jpg', desc: 'Il canale da affrontare'}
  let foto15 = {path: 'zoldano/toanella03.jpg', desc: 'Gendarmi lungo la via di salita'}
  let foto16 = {path: 'zoldano/toanella04.jpg', desc: 'Verso gli Sfornioi'}
  fotoToanella.push(foto13)
  fotoToanella.push(foto14)
  fotoToanella.push(foto15)
  fotoToanella.push(foto16)

  let descToanella = `Escursione fantastica. Da Pontesei si punta al il rifugio Bosconero e oltrepassatolo si
  procede alla forcella della Toanella (m 2100 circa, 1300 dislivello). Da qui
  si scende verso destra, abbandonando subito il sentiero che porterebbe al
  Biv. Toanella, costeggiando le pareti ed ignorando un primo canale che sale
  alla cima. Si sceglie invece il secondo, prima largo e ghiaioso, poi per
  massi fino a che si stringe in un primo salto di 3m II-. La salita e' sempre
  avvincente con tratti discontinui di I e I+ sempre pero' chiusi nel canale.
  Ad una diramazione si segue per il ramo di sinistra, ometto alla base.
  Guadagnando quota, con difficolta' paragonabili, la roccia si fa
  moderatamente piu' friabile. Usciti su un'aerea forcelletta si prosegue per
  una cengia di una cinquantina di metri, stretta ed abbastanza esposta, in
  vista della cima. Qui il percorso si fa articolato per cenge ed occorre
  anche saltare su una spaccatura di circa 1m. Un ultimo canale porta alla
  cima (un passo breve di II in una strettoia) piuttosto esigua e
  frastagliata, con una visione a 360 gradi memorabile su dolomiti e prealpi
  bellunesi.`

  let fotoDenteFopa = []
  let foto17 = {path: 'zoldano/denteFopa01.jpg', desc: 'Il Moschesin'}
  let foto18 = {path: 'zoldano/denteFopa02.jpg', desc: 'Il Dente'}
  let foto19 = {path: 'zoldano/denteFopa03.jpg', desc: 'Biv. Carnielli'}
  let foto20 = {path: 'zoldano/denteFopa04.jpg', desc: 'Nel canale'}
  fotoDenteFopa.push(foto17)
  fotoDenteFopa.push(foto18)
  fotoDenteFopa.push(foto19)
  fotoDenteFopa.push(foto20)

  let descDenteFopa = `Si
  lascia l'auto in val Pramper al parcheggio a 1200m e si prende il ripido
  sentiero che va al biv. Carnielli. La nostra cima e' ben visibile col suo
  profilo triangolare a chiudere la valle verso est. Si perviene alla base
  della parete che porta al Carnielli (un passaggio di I un centinaio di
  metri piu' sotto). Si prende quindi una cengia verso destra che conduce
  all'imbocco del canalone alla sinistra del Dent dela Fopa. Subito occorre
  superare una difficolta' sul I+ o a sinistra scivolando su un masso lisciato
  o piu' a destra su paretina scalinata e poi cengetta friabile. Poi si risale
  lungamente il canale per massi senza difficolta' e, ad una biforcazione, si
  prende la strettoia di desta. Qui con qualche passo di I si perviene a un piccolo
  intaglio di forcella (alternativamente salire direttamente a destra per
  gradoni pochi metri prima della forcella (I+). La cima e' in vista sulla
  destra e la si raggiunge facilmente senza percorso obbligato, magari usando le mani su qualche placca appoggiata.
  Salita nel complesso abbordabile anche perche' breve, ma in ambiente
  abbastanza vergine una volta lasciato il sentiero che del biv. Carnielli. Bella
  visione d'infilata verso le cime che a sud-est vanno verso il Pramper e
  ottimo balcone panoramico per le pareti degli Spiz.`

  let fotoSasse = []
  let foto21 = {path: 'zoldano/sasse01.jpg', desc: 'Arrampicando sulla parete appoggiata'}
  let foto22 = {path: 'zoldano/sasse02.jpg', desc: 'Cengioni detritici'}
  let foto23 = {path: 'zoldano/sasse03.jpg', desc: 'Biv. Carnielli'}
  let foto24 = {path: 'zoldano/sasse04.jpg', desc: 'Piccolo Civetta e Civetta'}
  let foto25 = {path: 'zoldano/sasse05.jpg', desc: 'Pelmo e Antelao dalla vetta'}
  fotoSasse.push(foto21)
  fotoSasse.push(foto22)
  fotoSasse.push(foto23)
  fotoSasse.push(foto24)
  fotoSasse.push(foto25)

  let descSasse = `Salita molto divertente con una lunga parete di I/I+ continuo priva di reale esposizione.`

  let fotoGardesana = []
  let foto26 = {path: 'zoldano/gardesana01.jpg', desc: 'Per cenge'}
  let foto27 = {path: 'zoldano/gardesana02.jpg', desc: 'Cima'}
  fotoGardesana.push(foto26)
  fotoGardesana.push(foto27)

  let descGardesana = `Da Pian de Caleda, dopo lungo avvicinamento in 
  falsopiano si risale la ripida f.lla Larga. Quindi ci gira il massiccio 
  della Gardesana verso est (val Pramper) fino a giungere alla cresta. Da 
  qui si prosegue per cenge e pendii detritici sul versante nord-est (1 
  passaggio esposto, anche evitabile). Si perviene quindi sotto una 
  bastinata rocciosa. Qui si prende la cengia che per un 20m prosegue 
  verso sinistra ( si torna sul versante est), fino ad affacciarsi ad un 
  profondo canale. Questo tratto richiede di scendere alcuni metri per 
  roccette friabili e un po' esposte I+). Quindi si risale un pendio 
  semi-erboso per poi piegare decisamente a destra su per un facile canale 
  (ometto). All'uscita conviene spostarsi ulteriormente a destra e montare 
  in cresta finale (2m di I+). Alternativamente si puo' proseguire dritti 
  arrampicando su roccia abbastanza buona (alcuni passaggi II-). La cima 
  e' estremamente panoramica e la salita e' nel complesso abbastanza 
  vergine e solitaria. Tornando siamo saliti sino a F.lla Forzelete, e 
  c'e' chi ha fatto anche questa cima (65m dislivello dalla forcella)..`

  let fotoSpiz = []
  let foto28 = {path: 'zoldano/Spiz01.jpg', desc: 'Spiz di Mezzo da Spiz Sud'}
  let foto29 = {path: 'zoldano/Spiz02.jpg', desc: 'Verso lo Spiz Nord'}
  let foto30 = {path: 'zoldano/Spiz03.jpg', desc: 'Spiz Est'}
  let foto31 = {path: 'zoldano/Spiz04.jpg', desc: 'Moschesin e Tamer'}
  fotoSpiz.push(foto28)
  fotoSpiz.push(foto29)
  fotoSpiz.push(foto30)
  fotoSpiz.push(foto31)

  let descSpiz = `Al biv. Carnielli si perviene affrontando qualche passo esposto in cengia e 
  rimontando circa 200m di rocce sul I grado discontinuo (1 passaggio I+). 
  Dal bivacco si risale l'intaglio tra i due Spiz verso sinistra, 
  guadagnado qualche decina di metri su sentiero. Poi si puo' continuare a 
  sinistra nel fondo del canalone con difficolta max I+ fin sotto un masso 
  incastrato. Li occorre infilarsi in una stretta fessura e forzare il 
  passaggio (III). Alternativamente alla base del canalone si segue la 
  traccia verso destra e quindi si rimonta una parete di circa 30m. Anche 
  qui piu' varianti, passaggi anche di II+ esposti. Raggiunto un gendarme 
  si risale con difficolta' minori sino ad un'altra paretina in vista 
  della cengia di salita. Si puo' scalare la paretina o piu' a sinistra 
  dentro il canale (10m, II). Poi la cengia si presenta stretta solo in un 
  paio di punti. La cresta finale e' sul I grado o terreno inclinato e 
  friabile che richiede molta attenzione. Il concatenamento allo Spiz di 
  Mezzo prevede di risalire un canale sulla zona nord-est del torrione. 
  Ancora piu' friabile dello Spiz Sud, difficolta' max I+. Per la discesa 
  si trovano anelli di cordino per calate su un pino mugo, con varie altre 
  possibilità di assicurazione su spuntoni o clessidre.`

  let fotoSpigolDelPalon = []
  let foto32 = {path: 'zoldano/SpigolDelPalon-01.jpg', desc: 'La profonda Val Costa dei Nass'}
  let foto33 = {path: 'zoldano/SpigolDelPalon-02.jpg', desc: 'Spigol Del Palon e Coro'}
  let foto34 = {path: 'zoldano/SpigolDelPalon-03.jpg', desc: 'Temporale in arrivo'}
  let foto35 = {path: 'zoldano/SpigolDelPalon-04.jpg', desc: 'Antecima'}
  let foto36 = {path: 'zoldano/SpigolDelPalon-05.jpg', desc: 'Ultimi metri su terreno infido'}
  fotoSpigolDelPalon.push(foto32)
  fotoSpigolDelPalon.push(foto33)
  fotoSpigolDelPalon.push(foto34)
  fotoSpigolDelPalon.push(foto35)
  fotoSpigolDelPalon.push(foto36)

  let descSpigolDelPalon = `Il rif. Pramperet è il punto di partenza ideale. Si segue il 521 abbassandosi 
  non poco in val Costa dei Nass, per poi risalire a forcella Piccola che 
  offre una splendida apertura sulla conca di Cornia. In vista della cima 
  si segue una traccia tra i mughi che consente di stare in quota sino ad 
  imboccare la ripida rampa erbosa che porta alla forcella Sagretta a nord dello 
  Spigol. Da qui si prosegue per cenge e piccoli risalti, con passaggi di 
  I anche esposto. Si perviene ad un'ampia cupola rocciosa che fa da 
  anticima. Quindi occorre scendere per una ventina di metri, ancora su 
  terreno delicato e friabile, per poi imboccare una cengia sempre più 
  larga che conduce sino in cresta. Gli ultimi 50 m sono ancora meritevoli 
  di attenzione, su cresta rotta dalle intemperie. Rientro avventuroso, sino a 
  congiungersi al canale di salita della via normale al Coro.`

  let fotospizBelvedere = []
  let foto37 = {path: 'zoldano/spizBelvedere01.jpg', desc: 'Spiz nord-ovest e nord-est'}
  let foto38 = {path: 'zoldano/spizBelvedere02.jpg', desc: 'Canale di I+'}
  fotospizBelvedere.push(foto37)
  fotospizBelvedere.push(foto38)

  let descspizBelvedere = `Dal Rif Angelini sora l'Sass si prosegue sul 532 fin in vista della forcella La Porta. 
  In corrispondenza dell'alto campanile detto "il Prete" si svolta a sinistra e, per ripido ghiaione si punta alla forcella Belvedere 
  (attenzione alle scariche di sassi). Circa 70m sotto la forcella si inizia ad attaccare le balze semi-erbose alla sinistra cercando 
  un evidente canale che si tiene al margine destro delle rocce. Si risale lo stesso fin quasi alla fine (15m I+) per uscirne verso 
  sinistra e proseguendo in modesta pendenza (mughi) per una ventina di metri. Con pochi passi si guadagna il filo di cresta, ma il risalto 
  più elevato resta una trentina di metri a destra. Per raggiungere l'appicco finale si prosegue in quota su una sorta di cengetta 
  sempre sul versante degli Spiz, qualche passo un po' delicato. La cima si raggiunge o scalando gli ultimi 5/6m su II- solido 
  oppure proseguendo ancora qualche metro in cenga, fino in vista di forcella Belvedere. Si sale poi sul ripido e marcio, 
  guadagnando la cima con solo gli ultimi 2m in arrampicata. Il sasso di vetta 
  è molto limitato e non ci stanno più di due persone.`

  let fotoCivetta = []
  let foto39 = {path: 'zoldano/civetta01.jpg', desc: 'In cima al Civetta'}
  let foto40 = {path: 'zoldano/civetta02.jpg', desc: 'Il lago Coldai dall\'omonima cima'}
  let foto41 = {path: 'zoldano/civetta03.jpg', desc: 'Il profilo del Pelmo all\'alba'}
  let foto42 = {path: 'zoldano/civetta04.jpg', desc: 'Su cima Coldai la sera prima'}
  fotoCivetta.push(foto39)
  fotoCivetta.push(foto40)
  fotoCivetta.push(foto41)
  fotoCivetta.push(foto42)

  let descCivetta = `Percorso faticoso (sentiero Tivan). Tratti 
  di I e passaggi di II, qualche cavo metallico verticale per evitare il 
  fondo dei canali detritici.`

  let fotoSanSebastiano = []
  let foto43 = {path: 'zoldano/SanSebastiano01.jpg', desc: 'Van di Caleda'}
  let foto44 = {path: 'zoldano/SanSebastiano02.jpg', desc: 'Cresta finale'}
  let foto45 = {path: 'zoldano/SanSebastiano03.jpg', desc: 'I Tamer'}
  let foto46 = {path: 'zoldano/SanSebastiano04.jpg', desc: 'Corvo'}
  fotoSanSebastiano.push(foto43)
  fotoSanSebastiano.push(foto44)
  fotoSanSebastiano.push(foto45)
  fotoSanSebastiano.push(foto46)

  let descSanSebastiano = `Da Ponte Caleda si sale al 
  van di Caleda per sentiero ripido con alcuni tratti di I grado su 
  terreno tranquillo. Si prende quindi la diramazione verso sinistra che 
  punta alla forcella di San Sebastiano, ove si perviene risalendo con 
  fatica i ghiaioni. Da qui restano 20/25 minuti di cresta con sentiero 
  alternato a brevi tratti di I grado divertente anche su placchette. La 
  cima offre un buon punto di osservazione centrale verso Pelmo, Civetta, 
  Antelao a nord-est con bei scorci sui vicini Tamer piccolo e grande.`

  let fotoPramper = []
  let foto47 = {path: 'zoldano/pramper01.jpg', desc: 'Verso Forc. Palon'}
  let foto48 = {path: 'zoldano/pramper02.jpg', desc: 'La cresta, a scendere'}
  fotoPramper.push(foto47)
  fotoPramper.push(foto48)

  let descPramper = `Dal Rif. Pramperet si prende il sentiero 521 sino a Forcella Piccola. Da qui
  si scende per pochi metri e si segue subito una evidente traccia verso
  sinistra che, attraverso mughi prima e poi su bancate misto erbose, ci porta
  in direzione della forcella del Palon. Poche decine di metri prima della
  forcella conviene risalire l'evidente canale molto ripido che porta in
  cresta. Da qui si sale a sinistra lungo la dorsale, sempre abbastanza ampia.
  Si seguono gli ometti per evitare salti rocciosi, con solo alcuni passi di
  I. Quasi in vetta occorre scendere da un terrazzo per 2m (I+ non esposto).
  Nella discesa, arrivato alla forcella del Palon, sono sceso direttamente in
  val Pramper. Il canalone richiede attenzione soprattutto nei primi 100/200m
  di discesa (ripido e friabile). Poi bisogna seguire le tracce poco evidenti
  per trovare il percorso più agevole. Nella parte mediana il canale diventa
  greto di ruscello, quindi molto scivoloso. La parte finale e' più facile,
  su ghiaione, ma ormai troppo poco ripido per accelerare la discesa.`

  let fotoMoschesin = []
  let foto49 = {path: 'zoldano/Moschesin01.jpg', desc: 'Sulla normale al Moschesin'}
  let foto50 = {path: 'zoldano/Moschesin02.jpg', desc: 'Passaggio di II'}
  fotoMoschesin.push(foto49)
  fotoMoschesin.push(foto50)

  let descMoschesin = `Salita durissima a forcella Larga da ovest. 
  Il primo camino presenta Difficoltà di I e I+ con un passo di II in 
  uscita. Sulla seconda paretina I+ continuo per 15 metri circa. La via è 
  segnata con minio rosso. Splendida architettura di montagna isolata nel 
  contesto Zoldano.`

  let fotoCostonGard = []
  let foto51 = {path: 'zoldano/costonGard00.jpg', desc: 'Il canalone selvaggio da risalire'}
  let foto52 = {path: 'zoldano/costonGard01.jpg', desc: 'Talvena e Castello di Moschesin'}
  let foto53 = {path: 'zoldano/costonGard02.jpg', desc: 'La Gardesana'}
  let foto54 = {path: 'zoldano/costonGard03.jpg', desc: 'Gruppo degli Spiz'}
  fotoCostonGard.push(foto51)
  fotoCostonGard.push(foto52)
  fotoCostonGard.push(foto53)
  fotoCostonGard.push(foto54)

  let descCostonGard = `Selvaggio canalone da Pian dei Palui, con sbiaditi bolli rossi, per sbucare nel Van della Gardesana.`

  let fotoCrestaSanSebastiano = []
  let foto55 = {path: 'zoldano/CrestaSanSebastiano01.jpg', desc: 'Quota maggiore'}
  let foto56 = {path: 'zoldano/CrestaSanSebastiano02.jpg', desc: 'I tre Tamer'}
  let foto57 = {path: 'zoldano/CrestaSanSebastiano03.jpg', desc: 'Cresta Sud'}
  fotoCrestaSanSebastiano.push(foto55)
  fotoCrestaSanSebastiano.push(foto56)
  fotoCrestaSanSebastiano.push(foto57)

  let descCrestaSanSebastiano = `Il percorso si stacca dal 
  sentiero che porta alla forc. di San Sebastiano all'altezza di un ampio 
  canalone ghiaioso che appare subito evidente sulla destra. Si risale 
  tutto il canale scegliendo il percorso a piacimento con eventuali 
  passaggi di I evitabili. Dalla forcella per raggiungere la quota 
  maggiore si va a destra e per facili terrazzamenti e bancate si perviene 
  sull'isolata cima (ancora qualche passo di I mai esposto). La quota 2405 
  si raggiunge tornando alla forcella e proseguendo in cresta fin sotto la 
  torretta sommitale che si guadagna facilmente seguendo gli ometti che 
  indicano una comoda cengetta. La cima è decisamente angusta e in tre si 
  sta stretti.`

  let fotoTamer = []
  let foto58 = {path: 'zoldano/Tamer01.jpg', desc: 'Sulla cengia del Tamer'}
  fotoTamer.push(foto58)

  let descTamer = `Dopo il cengione 
  si sale per gole ripide e abbastanza franose, un passaggio piu difficile 
  in corrispondenza di un salto di 5m (I+ delicato).`

  let fotoCimaVenier = []
  let foto59 = {path: 'zoldano/CimaVenier01.jpg', desc: 'Rampa di accesso al Viaz sora la Fopa'}
  let foto60 = {path: 'zoldano/CimaVenier02.jpg', desc: 'Salto di II in discesa per guadagnare la cengia'}
  let foto61 = {path: 'zoldano/CimaVenier03.jpg', desc: 'Strettoia della cengia'}
  let foto62 = {path: 'zoldano/CimaVenier04.jpg', desc: 'Versante est del monte prima dei prati terminali'}
  fotoCimaVenier.push(foto59)
  fotoCimaVenier.push(foto60)
  fotoCimaVenier.push(foto61)
  fotoCimaVenier.push(foto62)

  let descCimaVenier = `Via di salita 
	per il Viaz sora la Fopa che si attacca al bivio per il biv. Carnielli de 
	Marchi rimontando la rampa ghiaiosa verso destra. Giunti su uno spallone, in 
	presenza di un grosso gendarme, gli ometti fanno perdere quota fino ad un 
	fitto di mughi. qui serve calarsi per una decina di metri, i primi con 
	l'aiuto dei mughi stessi, poi altri 5m di II solido per guadagnare una 
	selletta che segna l'inizio del Viaz. La cengia è spesso molto larga e 
	assume i connotati di una bancata ascendente. Anche le poche strettoie non 
	creano particolari patemi. I passi un po' più delicati in uscita, ormai in 
	vista della forcella Sagrona. Poco prima della forcella, ove la cengia si 
	interrompe, si prende il canale ghiaioso che scende evidente dalla sinistra. 
	Il camino si restringe e oppone alcuni passi sul I+ fino ad un 
	caratteristico foro che si imbocca per discendere in vista della forcella, 
	spostandosi ora sul versante est. Si resta poi alti su cengia prativa e 
	aggirando, ancora verso est si risalgono alcune decine di metri facili, 
	qualche passo di I forse, per poi affrontare gli ampi prati terminali che, 
	ripidamente portano alla bianca torretta della cima.`

  let fotoBosconero = []
  let foto63 = {path: 'zoldano/bosconero01.jpg', desc: 'Verso Toanella e Rocchetta'}
  let foto64 = {path: 'zoldano/bosconero02.jpg', desc: 'Verso il viaz de l\'Ors'}
  let foto65 = {path: 'zoldano/bosconero03.jpg', desc: 'In vista di forcella Toanella'}
  let foto66 = {path: 'zoldano/bosconero04.jpg', desc: 'Cima'}
  fotoBosconero.push(foto63)
  fotoBosconero.push(foto64)
  fotoBosconero.push(foto65)
  fotoBosconero.push(foto66)

  let descBosconero = `Risalita abbastanza dura fino a forcella Toanella, 
  compensata da panorami dolomitici esaltanti. Dalla forcella alla vetta 
  sono 330m di dislivello su sentiero ben evidente (ometti e qualche 
  sbiadito segnavia rosso). Lo sviluppo e' abbastanza lungo anche su 
  cengia (un solo punto richiede un po' di attenzione). Gli ultimi 20m 
  sono su blocchi accatastati (passaggi di I). Cima estremamente 
  panoramica ed isolata.`

  let fotoFonch = []
  let foto67 = {path: 'zoldano/fonch01.jpg', desc: 'Verso la Rocchetta'}
  let foto68 = {path: 'zoldano/fonch02.jpg', desc: 'Viaz del Fonch'}
  fotoFonch.push(foto67)
  fotoFonch.push(foto68)

  let descFonch = `Da passo Cibiana per forcella Ciavazole e poi seguendo la normale allo
  Sfornioi Nord si arriva all'attacco del Viaz. Si scende per decine di metri,
  poi la cengia diventa pressochè orizzontale. Nella discesa occorre
  scendere un 3m circa di II . più avanti ci sono un paio di passaggi critici, anche
  esposti con scarsa possibilità di assicurazione. Si risale poi con passaggi di I alla Forcella Dantre Sfornioi.
  Abbiamo poi proseguito in discesa per il versante Campestrin in direzione
  Forcella del Matt. Anche in questo tratto di percorso ci sono passaggi un po' delicati. La risalita a forcella del Matt 
  è piuttosto faticosa nelcanalone rotto di massi. Discesa poi al rif. Bosconero.`

  let fotoSfornioiNord = []
  let foto69 = {path: 'zoldano/sfornioiNord01.jpg', desc: 'Dalla cima dello Sfornioi Nord'}
  let foto78 = {path: 'zoldano/SfornioiNord02.jpg', desc: 'Gruppo del Bosconero verso sud'}
  let foto79 = {path: 'zoldano/SfornioiNord03.jpg', desc: 'Spunta il Sassolungo di Cibiana'}
  fotoSfornioiNord.push(foto69)
  fotoSfornioiNord.push(foto78)
  fotoSfornioiNord.push(foto79)

  let descSfornioiNord = `Da passo Cibiana per forcella Ciavazole. I e II nei due canali friabili sul castello 
  sommitale. Affrontabile in assetto escursionistico con la massima cautela.`

  let fotoCoro = []
  let foto70 = {path: 'zoldano/coro01.jpg', desc: 'Giaron de la Fopa'}
  let foto71 = {path: 'zoldano/coro02.jpg', desc: 'Verso il Pramper'}
  fotoCoro.push(foto70)
  fotoCoro.push(foto71)

  let descCoro = `Risalito lungamente tutto il Giaron de la Fopa fino a forcella del Coro. Il
  percorso è misto tra ghiaioni, massi e tratti più compatti con pendenze
  elevate nel tratto finale. La segnalazioni sono inesistenti. Dalla forcella
  si aggira il primo spuntone tenendosi sul versante orientale per poi
  guadagnare l'ampia cresta che porta alla vetta senza difficoltà alcuna.`

  let fotoMontAltoPelsa = []
  let foto72 = {path: 'zoldano/MontAltoPelsa01.jpg', desc: 'Verso il Civetta'}
  let foto73 = {path: 'zoldano/MontAltoPelsa02.jpg', desc: 'Torre Venezia'}
  fotoMontAltoPelsa.push(foto72)
  fotoMontAltoPelsa.push(foto73)

  let descMontAltoPelsa = `Da Capanna Trieste a Casera di Pelsa per sentiero 555 e 560, passando per il rif. Vazzoler.
  Quindi si sale per tracce in direzione nord forzando frequentemente attraversamenti di mughi, fino a sbucare
  nelle alte e ripide zone prative e proseguendo per ante-cime fino alla sommità principale. Al rientro siamo scesi per ripidi alla Sella di Pelsa.`

  let fotoPetorgnon = []
  let foto74 = {path: 'zoldano/petorgnon01.jpg', desc: 'Il Pramper'}
  let foto75 = {path: 'zoldano/petorgnon02.jpg', desc: 'Il Pelmo'}
  let foto76 = {path: 'zoldano/petorgnon03.jpg', desc: 'Gardesana, Forzelete e Tamer'}
  let foto77 = {path: 'zoldano/petorgnon04.jpg', desc: 'Catena degli Spiz di Mezzodì'}
  fotoPetorgnon.push(foto74)
  fotoPetorgnon.push(foto75)
  fotoPetorgnon.push(foto76)
  fotoPetorgnon.push(foto77)

  let descPetorgnon = `Salita facile, tipicamente primaverile o autunnale, con vista panoramica a 360° sulle montagne del Zoldano..`

return (
  <div className='row App'>
    <div className='col-sm-2 colLeft'>
      <Sidebar />
        </div>
        <div className='col-sm-10'>          
        <Gita title='Cima delle Forzelete'  quota='2448m' dislivello='~1100m' difficolta='I+' descrizione={descForzelete} foto={fotoForzelete} ></Gita>
        <Gita title='Pramperet'  quota='2337m' dislivello='1300m' difficolta='II-/F+' descrizione={descPramperet} foto={fotoPramperet} ></Gita>
        <Gita title='Sasso di Toanella'  quota='2430m' dislivello='1720m' difficolta='II-/F+' descrizione={descToanella} foto={fotoToanella} ></Gita>
        <Gita title='Dente de la Fopa'  quota='2161m' dislivello='960m' difficolta='I+/F' descrizione={descDenteFopa} foto={fotoDenteFopa} ></Gita>
        <Gita title='Cima delle Sasse'  quota='2878m' dislivello='1250m' difficolta='I+/F+' descrizione={descSasse} foto={fotoSasse} ></Gita>
        <Gita title='Cima della Gardesana'  quota='2446m' dislivello='1300m' difficolta='II-/F+' descrizione={descGardesana} foto={fotoGardesana} ></Gita>
        <Gita title='Spiz Sud / Spiz di Mezzo'  quota='2309/2324m' dislivello='1300m' difficolta='II/II+/PD' descrizione={descSpiz} foto={fotoSpiz} ></Gita>
        <Gita title='Spigol Del Palon'  quota='2314m' dislivello='1300m' difficolta='I+/F' descrizione={descSpigolDelPalon} foto={fotoSpigolDelPalon} ></Gita>
        <Gita title='Spiz di Belvedere'  quota='2150m' dislivello='1000m' difficolta='I+/F' descrizione={descspizBelvedere} foto={fotospizBelvedere} ></Gita>
        <Gita title='Monte Civetta'  quota='3221m' dislivello='750+1200m' difficolta='II-/PD-' descrizione={descCivetta} foto={fotoCivetta} ></Gita>
        <Gita title='Cima Nord di San Sebastiano'  quota='2488m' dislivello='980m' difficolta='I/EE' descrizione={descSanSebastiano} foto={fotoSanSebastiano} ></Gita>
        <Gita title='Pramper'  quota='2409m' dislivello='1350m' difficolta='I/F' descrizione={descPramper} foto={fotoPramper} ></Gita>
        <Gita title='Castello di Moschesin'  quota='2499m' dislivello='~1150m' difficolta='I+/II-/F+' descrizione={descMoschesin} foto={fotoMoschesin} ></Gita>
        <Gita title='Coston della Gardesana'  quota='2165m' dislivello='1000m' difficolta='EE' descrizione={descCostonGard} foto={fotoCostonGard} ></Gita>
        <Gita title='Cresta Sud di San Sebastiano'  quota='2405/2420m' dislivello='950m' difficolta='I/F' descrizione={descCrestaSanSebastiano} foto={fotoCrestaSanSebastiano} ></Gita>
        <Gita title='Tamer Grande'  quota='2547m' dislivello='950m' difficolta='I+/F+' descrizione={descTamer} foto={fotoTamer} ></Gita>
        <Gita title='Cima del Venier'  quota='2237m' dislivello='1100m' difficolta='I/F' descrizione={descCimaVenier} foto={fotoCimaVenier} ></Gita>
        <Gita title='Sasso di Bosconero'  quota='2468m' dislivello='1670m' difficolta='I/EE' descrizione={descBosconero} foto={fotoBosconero} ></Gita>
        <Gita title='Viaz del Fonch'  quota='~2200m' dislivello='1100m' difficolta='II/F+' descrizione={descFonch} foto={fotoFonch} ></Gita>
        <Gita title='Sfornioi Nord'  quota='2410m' dislivello='900m' difficolta='II/F+' descrizione={descSfornioiNord} foto={fotoSfornioiNord} ></Gita>
        <Gita title='Coro (Val Pamper)'  quota='2326m' dislivello='1160m' difficolta='EE' descrizione={descCoro} foto={fotoCoro} ></Gita>
        <Gita title='Mont Alt de Pelsa'  quota='2417m' dislivello='1350m' difficolta='EE' descrizione={descMontAltoPelsa} foto={fotoMontAltoPelsa} ></Gita>
        <Gita title='Petrognon'  quota='1914m' dislivello='850m' difficolta='E' descrizione={descPetorgnon} foto={fotoPetorgnon} ></Gita>
        </div>  
    </div>        
  );
}