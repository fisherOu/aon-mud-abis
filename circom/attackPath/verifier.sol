// SPDX-License-Identifier: GPL-3.0
/*
    Copyright 2021 0KIMS association.

    This file is generated with [snarkJS](https://github.com/iden3/snarkjs).

    snarkJS is a free software: you can redistribute it and/or modify it
    under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    snarkJS is distributed in the hope that it will be useful, but WITHOUT
    ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
    or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public
    License for more details.

    You should have received a copy of the GNU General Public License
    along with snarkJS. If not, see <https://www.gnu.org/licenses/>.
*/

pragma solidity >=0.7.0 <0.9.0;

contract Groth16Verifier {
    // Scalar field size
    uint256 constant r    = 21888242871839275222246405745257275088548364400416034343698204186575808495617;
    // Base field size
    uint256 constant q   = 21888242871839275222246405745257275088696311157297823662689037894645226208583;

    // Verification Key data
    uint256 constant alphax  = 14202645530471497878039441663946697173872106976362752403389425781970528400705;
    uint256 constant alphay  = 8914852381963330206683138323549859405690157844419510152285593062315864607900;
    uint256 constant betax1  = 6627494316216748733275700238609430713734011428224240514835571675232411239898;
    uint256 constant betax2  = 6856625749506720313125943753857275689361742651857451799275066515670975620017;
    uint256 constant betay1  = 4332441742281178705208224075046728573728705409135895044859389538085145288278;
    uint256 constant betay2  = 19841963025205259063377773692952311722711907708346502363577618067273126431136;
    uint256 constant gammax1 = 11559732032986387107991004021392285783925812861821192530917403151452391805634;
    uint256 constant gammax2 = 10857046999023057135944570762232829481370756359578518086990519993285655852781;
    uint256 constant gammay1 = 4082367875863433681332203403145435568316851327593401208105741076214120093531;
    uint256 constant gammay2 = 8495653923123431417604973247489272438418190587263600148770280649306958101930;
    uint256 constant deltax1 = 20401525697084024868001640568381526892930976023940694545339560886576525346972;
    uint256 constant deltax2 = 8737081343584190808092647960989216233040075679006309522612356092283801984808;
    uint256 constant deltay1 = 14698095891975854676865527281675499692204435127841388828194045154765235669623;
    uint256 constant deltay2 = 6403781171082403258844510160939333981302245212920602932291090502849681561006;

    
    uint256 constant IC0x = 10418352588504642222971713181337718123200826802787448405829158791235993022055;
    uint256 constant IC0y = 21409817565109771902327024506462574545700008537568316238721786915987185140200;
    
    uint256 constant IC1x = 18450690620791570458351963996435076104010703197051844513685490695601636431946;
    uint256 constant IC1y = 1968901338543586639239312727643711743158898061517805314308718482466742337808;
    
    uint256 constant IC2x = 19603201546116604076105347768187419238899640147295874862810964243088969309804;
    uint256 constant IC2y = 6555398876209666707775380386454937239190110503826782185008755951623016398455;
    
    uint256 constant IC3x = 4674648496567438443796964194221101583069634200685432653589911948359483531098;
    uint256 constant IC3y = 17902709390353095351474738771874265300068447631453843787849685856062946324247;
    
    uint256 constant IC4x = 9575391584396222454116557309215781344394434190971087537756620321239963531138;
    uint256 constant IC4y = 20076539206622521297902210645397460877810099483089997708493270777202974231529;
    
    uint256 constant IC5x = 3060092572817627901365281307619998728348942825856673118135591000817980114337;
    uint256 constant IC5y = 6155766925191566332954810283565387130894984024571960951356588003521700382488;
    
    uint256 constant IC6x = 12706478285799516610585344453963884173201851938111911785611793118663277168206;
    uint256 constant IC6y = 19513077480757575552186542800735071714329582312851176118177089588060331579046;
    
    uint256 constant IC7x = 8987596929259210400075115413709642120472117241498600405971287165835619507902;
    uint256 constant IC7y = 19546107187916888411561664593302438231640657936226228259259333673396905004412;
    
    uint256 constant IC8x = 6220327214983819523028495029956301720879673458229198902786243665362260077662;
    uint256 constant IC8y = 8341513399462299385607075191174380241957125290599667014442814992755486071193;
    
    uint256 constant IC9x = 17633258620450810104421137980723703540825813256232661039203791223048120911146;
    uint256 constant IC9y = 6607158325036249507794667237175441754334677511949756942976992898174387207713;
    
    uint256 constant IC10x = 16889790085679086277859596647942505705635281877114807431934864478112925261725;
    uint256 constant IC10y = 17335426386463317128665979220868209889041145792233790800911323648981054486479;
    
    uint256 constant IC11x = 7199497760529503907823420040435163153470947413923006360762898900780979259622;
    uint256 constant IC11y = 9541362466028525519919739838511604593968817379676064786383225324727328031218;
    
    uint256 constant IC12x = 7702497652782306194876408228912431791839678464959961281453345083293118282227;
    uint256 constant IC12y = 11446920046357511100674706689280908280977572959804501644863311201308990680311;
    
    uint256 constant IC13x = 19811645667012126822672618820876292322246529414414021665669526234749031678268;
    uint256 constant IC13y = 12957650326479378772114095798293539282940023514861507175875796286592412382006;
    
    uint256 constant IC14x = 20838355707154277867337427059395508302504217695650905813735370084553102542001;
    uint256 constant IC14y = 6035523263279304603500421428815671864195703922764078207468040993556998075887;
    
    uint256 constant IC15x = 18346706237849887154143175886975659270503728906424994508208162678951671929978;
    uint256 constant IC15y = 7759534570740940488589159529744348738011801789490919340819627568930166831036;
    
    uint256 constant IC16x = 20565771383530201209593925823261419235282692592508619437171685762995195729258;
    uint256 constant IC16y = 4404853428138612113985492715846443524434553541393900521697456647747106226834;
    
    uint256 constant IC17x = 20726499579429031732328066179482322709256687386780954473799927701306136109714;
    uint256 constant IC17y = 728501196404434532196250221613405255694315128641594954123745146017299362534;
    
    uint256 constant IC18x = 14317498455136976836102625331570160691350966716968414382342356590716558000945;
    uint256 constant IC18y = 18839523760560945114394840618342722993478032601928057838976653862930387130332;
    
    uint256 constant IC19x = 2665827888086902977568155959108595790396231610526166756949828068989005129687;
    uint256 constant IC19y = 16387816918741098030976471089335746221370626660155667028735808911287395539424;
    
    uint256 constant IC20x = 15012554910167820322598065652649638300780720691647740258562221998819801893833;
    uint256 constant IC20y = 6261870070839457700158253508976776292052293809399489022450461971433613661905;
    
    uint256 constant IC21x = 15558412264583597807589739283604594121737172963260275840990744137529264407867;
    uint256 constant IC21y = 3909089397393135557051771459865329982880999203250216937401624970225980272850;
    
    uint256 constant IC22x = 16968243116191040419715710718776329058513488528120029405192213579996607590640;
    uint256 constant IC22y = 13399581631647526367813641293407419350792105720632775781157416427731639323838;
    
    uint256 constant IC23x = 17467671281114217885863212662468153739930540935525636320235422600825334796458;
    uint256 constant IC23y = 4572992409213253501402226215357493564108424397661910226567719986577346227731;
    
    uint256 constant IC24x = 21828350102461813180493301274562711439335176715073628500796600010475130962458;
    uint256 constant IC24y = 7626214512423764108544401262807646378045163929407502127637258827522489806401;
    
    uint256 constant IC25x = 21160169253654328346706640268987600641611370132051400486882204025772451939205;
    uint256 constant IC25y = 20193718392728046545608802017569071586562044929155804057912787354945415830281;
    
    uint256 constant IC26x = 9962734660744713625604925694233258590745205972135405723359997807579131172315;
    uint256 constant IC26y = 14829090913461982618284047284134556575758636317301785451582798735332829105554;
    
    uint256 constant IC27x = 12123699459305567398096267929446943047388596722891032285253800563012659382060;
    uint256 constant IC27y = 16104989053226785151266820746709794510677082211983921865667408745279698589963;
    
    uint256 constant IC28x = 10401620853823569002945112357056771055093643579855912981111813424878034557764;
    uint256 constant IC28y = 9971543918728820390886990400147360113154264177485315848895542642160720817955;
    
    uint256 constant IC29x = 16396557322105422176295595775239230184545477663280857163985421137719725234522;
    uint256 constant IC29y = 20152019869775990595243381586985045756017071875400420779638620697632473474798;
    
    uint256 constant IC30x = 16959223079120597968162494934008928469189260378441988687537132141060861192479;
    uint256 constant IC30y = 8454336269887795260923294856825055060615280032513811824371030935782330154573;
    
    uint256 constant IC31x = 4001659839903034131475745547204044297506058156742246618173228472357506590441;
    uint256 constant IC31y = 10967136585770287111375662973730927854946731838436857943633992557466455249978;
    
    uint256 constant IC32x = 8687277823239438444625710558073365335588218463622452984303307148446678673052;
    uint256 constant IC32y = 16221874280695552185494557139204033399632301273524375491919783899904464049726;
    
    uint256 constant IC33x = 14662760106487839362342278699524448834834480490096726748324776540678563953508;
    uint256 constant IC33y = 14403696891170049207994269211803668925224000038517880631518706069886033430982;
    
    uint256 constant IC34x = 13611681834988837168895712867438092377648131557169353843850496006507662228407;
    uint256 constant IC34y = 21495052433090199099732730023498697869123596539572716933909163117641567830916;
    
    uint256 constant IC35x = 20813622031941177302086023120454368771099091667002026667064667852097141290980;
    uint256 constant IC35y = 13361081875762508986400202605000089474608288851645722575803467340213062003407;
    
    uint256 constant IC36x = 15806345917719309158575721812757438206653263090598066058837803824246108128397;
    uint256 constant IC36y = 3703993151012910495871308200898841792248144933486581597724675437673215967586;
    
    uint256 constant IC37x = 4894456556653006553234267096993995932001685422981218102880324152354761582954;
    uint256 constant IC37y = 9262313637744732378024413043806682044576608459532810479491104360309740946705;
    
    uint256 constant IC38x = 12837387580525694382421000987847427131817525451601133702101768173296061465924;
    uint256 constant IC38y = 21769971010709337773009485263924438779122042902264836770811547661121459973765;
    
    uint256 constant IC39x = 6432943727977776614372787815112125309258392274358904734972242322016835959443;
    uint256 constant IC39y = 10538029344718825187439687514385943455707709847306900541367199927267325339682;
    
    uint256 constant IC40x = 18139475165774962512689262298485036491583641405740835056380649903521287389685;
    uint256 constant IC40y = 10686134842820850587278973343256795718386614511095211836399322425848506302333;
    
    uint256 constant IC41x = 10877346818908752212042606228444196375632123227771179756154877622282567510382;
    uint256 constant IC41y = 598428357551222162748697463583489471238923301823743543916633869063553720366;
    
    uint256 constant IC42x = 3336986369046676118747379521630721110474174656509448440115790303495123427030;
    uint256 constant IC42y = 15292077271368642291039407934637855482379203439899992379251375065749088394335;
    
    uint256 constant IC43x = 13730013961946929970522535664570771397258355417859791224666536496181589986915;
    uint256 constant IC43y = 2128745626023599851660412907789478131544011013470215619612060480616654411694;
    
    uint256 constant IC44x = 9719420268990398251167115871725003447649129285622037442582404157734232951346;
    uint256 constant IC44y = 19089692020295965905341825816687235316003940923946658539752316417814481485073;
    
    uint256 constant IC45x = 11234584861800308305472760090291773499383677828173619878485314597696683944977;
    uint256 constant IC45y = 13125980475904355050224378362177433391141279191382097975547011237199376497059;
    
    uint256 constant IC46x = 7554332533107517582837953134014622353526753935744711374856952206297476823410;
    uint256 constant IC46y = 12935578390845968477591254702386566627605925207883300224824177461006689592077;
    
    uint256 constant IC47x = 6121801645249839969682750413466955314511450140218231812195858212142607227856;
    uint256 constant IC47y = 1950449662324904252260000471305065658776138695656995874149586039318139788884;
    
    uint256 constant IC48x = 12758677296855732481301693462609276055681576587077353204920485601466012449059;
    uint256 constant IC48y = 6385808188345921413384165677396808865801110556193170659160197557305874547495;
    
    uint256 constant IC49x = 6081349196250662044690168062912860748205513670953105720335974124936925932680;
    uint256 constant IC49y = 21569666508721758803863288740421363279287819431636275023047305444136371817311;
    
    uint256 constant IC50x = 12587465589798054254476815955192188623434581526944648121133219166713495390224;
    uint256 constant IC50y = 13201571172286647632594486811778805983196695621538138919577012927077402246698;
    
 
    // Memory data
    uint16 constant pVk = 0;
    uint16 constant pPairing = 128;

    uint16 constant pLastMem = 896;

    function verifyProof(uint[2] calldata _pA, uint[2][2] calldata _pB, uint[2] calldata _pC, uint[50] calldata _pubSignals) public view returns (bool) {
        assembly {
            function checkField(v) {
                if iszero(lt(v, q)) {
                    mstore(0, 0)
                    return(0, 0x20)
                }
            }
            
            // G1 function to multiply a G1 value(x,y) to value in an address
            function g1_mulAccC(pR, x, y, s) {
                let success
                let mIn := mload(0x40)
                mstore(mIn, x)
                mstore(add(mIn, 32), y)
                mstore(add(mIn, 64), s)

                success := staticcall(sub(gas(), 2000), 7, mIn, 96, mIn, 64)

                if iszero(success) {
                    mstore(0, 0)
                    return(0, 0x20)
                }

                mstore(add(mIn, 64), mload(pR))
                mstore(add(mIn, 96), mload(add(pR, 32)))

                success := staticcall(sub(gas(), 2000), 6, mIn, 128, pR, 64)

                if iszero(success) {
                    mstore(0, 0)
                    return(0, 0x20)
                }
            }

            function checkPairing(pA, pB, pC, pubSignals, pMem) -> isOk {
                let _pPairing := add(pMem, pPairing)
                let _pVk := add(pMem, pVk)

                mstore(_pVk, IC0x)
                mstore(add(_pVk, 32), IC0y)

                // Compute the linear combination vk_x
                
                g1_mulAccC(_pVk, IC1x, IC1y, calldataload(add(pubSignals, 0)))
                
                g1_mulAccC(_pVk, IC2x, IC2y, calldataload(add(pubSignals, 32)))
                
                g1_mulAccC(_pVk, IC3x, IC3y, calldataload(add(pubSignals, 64)))
                
                g1_mulAccC(_pVk, IC4x, IC4y, calldataload(add(pubSignals, 96)))
                
                g1_mulAccC(_pVk, IC5x, IC5y, calldataload(add(pubSignals, 128)))
                
                g1_mulAccC(_pVk, IC6x, IC6y, calldataload(add(pubSignals, 160)))
                
                g1_mulAccC(_pVk, IC7x, IC7y, calldataload(add(pubSignals, 192)))
                
                g1_mulAccC(_pVk, IC8x, IC8y, calldataload(add(pubSignals, 224)))
                
                g1_mulAccC(_pVk, IC9x, IC9y, calldataload(add(pubSignals, 256)))
                
                g1_mulAccC(_pVk, IC10x, IC10y, calldataload(add(pubSignals, 288)))
                
                g1_mulAccC(_pVk, IC11x, IC11y, calldataload(add(pubSignals, 320)))
                
                g1_mulAccC(_pVk, IC12x, IC12y, calldataload(add(pubSignals, 352)))
                
                g1_mulAccC(_pVk, IC13x, IC13y, calldataload(add(pubSignals, 384)))
                
                g1_mulAccC(_pVk, IC14x, IC14y, calldataload(add(pubSignals, 416)))
                
                g1_mulAccC(_pVk, IC15x, IC15y, calldataload(add(pubSignals, 448)))
                
                g1_mulAccC(_pVk, IC16x, IC16y, calldataload(add(pubSignals, 480)))
                
                g1_mulAccC(_pVk, IC17x, IC17y, calldataload(add(pubSignals, 512)))
                
                g1_mulAccC(_pVk, IC18x, IC18y, calldataload(add(pubSignals, 544)))
                
                g1_mulAccC(_pVk, IC19x, IC19y, calldataload(add(pubSignals, 576)))
                
                g1_mulAccC(_pVk, IC20x, IC20y, calldataload(add(pubSignals, 608)))
                
                g1_mulAccC(_pVk, IC21x, IC21y, calldataload(add(pubSignals, 640)))
                
                g1_mulAccC(_pVk, IC22x, IC22y, calldataload(add(pubSignals, 672)))
                
                g1_mulAccC(_pVk, IC23x, IC23y, calldataload(add(pubSignals, 704)))
                
                g1_mulAccC(_pVk, IC24x, IC24y, calldataload(add(pubSignals, 736)))
                
                g1_mulAccC(_pVk, IC25x, IC25y, calldataload(add(pubSignals, 768)))
                
                g1_mulAccC(_pVk, IC26x, IC26y, calldataload(add(pubSignals, 800)))
                
                g1_mulAccC(_pVk, IC27x, IC27y, calldataload(add(pubSignals, 832)))
                
                g1_mulAccC(_pVk, IC28x, IC28y, calldataload(add(pubSignals, 864)))
                
                g1_mulAccC(_pVk, IC29x, IC29y, calldataload(add(pubSignals, 896)))
                
                g1_mulAccC(_pVk, IC30x, IC30y, calldataload(add(pubSignals, 928)))
                
                g1_mulAccC(_pVk, IC31x, IC31y, calldataload(add(pubSignals, 960)))
                
                g1_mulAccC(_pVk, IC32x, IC32y, calldataload(add(pubSignals, 992)))
                
                g1_mulAccC(_pVk, IC33x, IC33y, calldataload(add(pubSignals, 1024)))
                
                g1_mulAccC(_pVk, IC34x, IC34y, calldataload(add(pubSignals, 1056)))
                
                g1_mulAccC(_pVk, IC35x, IC35y, calldataload(add(pubSignals, 1088)))
                
                g1_mulAccC(_pVk, IC36x, IC36y, calldataload(add(pubSignals, 1120)))
                
                g1_mulAccC(_pVk, IC37x, IC37y, calldataload(add(pubSignals, 1152)))
                
                g1_mulAccC(_pVk, IC38x, IC38y, calldataload(add(pubSignals, 1184)))
                
                g1_mulAccC(_pVk, IC39x, IC39y, calldataload(add(pubSignals, 1216)))
                
                g1_mulAccC(_pVk, IC40x, IC40y, calldataload(add(pubSignals, 1248)))
                
                g1_mulAccC(_pVk, IC41x, IC41y, calldataload(add(pubSignals, 1280)))
                
                g1_mulAccC(_pVk, IC42x, IC42y, calldataload(add(pubSignals, 1312)))
                
                g1_mulAccC(_pVk, IC43x, IC43y, calldataload(add(pubSignals, 1344)))
                
                g1_mulAccC(_pVk, IC44x, IC44y, calldataload(add(pubSignals, 1376)))
                
                g1_mulAccC(_pVk, IC45x, IC45y, calldataload(add(pubSignals, 1408)))
                
                g1_mulAccC(_pVk, IC46x, IC46y, calldataload(add(pubSignals, 1440)))
                
                g1_mulAccC(_pVk, IC47x, IC47y, calldataload(add(pubSignals, 1472)))
                
                g1_mulAccC(_pVk, IC48x, IC48y, calldataload(add(pubSignals, 1504)))
                
                g1_mulAccC(_pVk, IC49x, IC49y, calldataload(add(pubSignals, 1536)))
                
                g1_mulAccC(_pVk, IC50x, IC50y, calldataload(add(pubSignals, 1568)))
                

                // -A
                mstore(_pPairing, calldataload(pA))
                mstore(add(_pPairing, 32), mod(sub(q, calldataload(add(pA, 32))), q))

                // B
                mstore(add(_pPairing, 64), calldataload(pB))
                mstore(add(_pPairing, 96), calldataload(add(pB, 32)))
                mstore(add(_pPairing, 128), calldataload(add(pB, 64)))
                mstore(add(_pPairing, 160), calldataload(add(pB, 96)))

                // alpha1
                mstore(add(_pPairing, 192), alphax)
                mstore(add(_pPairing, 224), alphay)

                // beta2
                mstore(add(_pPairing, 256), betax1)
                mstore(add(_pPairing, 288), betax2)
                mstore(add(_pPairing, 320), betay1)
                mstore(add(_pPairing, 352), betay2)

                // vk_x
                mstore(add(_pPairing, 384), mload(add(pMem, pVk)))
                mstore(add(_pPairing, 416), mload(add(pMem, add(pVk, 32))))


                // gamma2
                mstore(add(_pPairing, 448), gammax1)
                mstore(add(_pPairing, 480), gammax2)
                mstore(add(_pPairing, 512), gammay1)
                mstore(add(_pPairing, 544), gammay2)

                // C
                mstore(add(_pPairing, 576), calldataload(pC))
                mstore(add(_pPairing, 608), calldataload(add(pC, 32)))

                // delta2
                mstore(add(_pPairing, 640), deltax1)
                mstore(add(_pPairing, 672), deltax2)
                mstore(add(_pPairing, 704), deltay1)
                mstore(add(_pPairing, 736), deltay2)


                let success := staticcall(sub(gas(), 2000), 8, _pPairing, 768, _pPairing, 0x20)

                isOk := and(success, mload(_pPairing))
            }

            let pMem := mload(0x40)
            mstore(0x40, add(pMem, pLastMem))

            // Validate that all evaluations ∈ F
            
            checkField(calldataload(add(_pubSignals, 0)))
            
            checkField(calldataload(add(_pubSignals, 32)))
            
            checkField(calldataload(add(_pubSignals, 64)))
            
            checkField(calldataload(add(_pubSignals, 96)))
            
            checkField(calldataload(add(_pubSignals, 128)))
            
            checkField(calldataload(add(_pubSignals, 160)))
            
            checkField(calldataload(add(_pubSignals, 192)))
            
            checkField(calldataload(add(_pubSignals, 224)))
            
            checkField(calldataload(add(_pubSignals, 256)))
            
            checkField(calldataload(add(_pubSignals, 288)))
            
            checkField(calldataload(add(_pubSignals, 320)))
            
            checkField(calldataload(add(_pubSignals, 352)))
            
            checkField(calldataload(add(_pubSignals, 384)))
            
            checkField(calldataload(add(_pubSignals, 416)))
            
            checkField(calldataload(add(_pubSignals, 448)))
            
            checkField(calldataload(add(_pubSignals, 480)))
            
            checkField(calldataload(add(_pubSignals, 512)))
            
            checkField(calldataload(add(_pubSignals, 544)))
            
            checkField(calldataload(add(_pubSignals, 576)))
            
            checkField(calldataload(add(_pubSignals, 608)))
            
            checkField(calldataload(add(_pubSignals, 640)))
            
            checkField(calldataload(add(_pubSignals, 672)))
            
            checkField(calldataload(add(_pubSignals, 704)))
            
            checkField(calldataload(add(_pubSignals, 736)))
            
            checkField(calldataload(add(_pubSignals, 768)))
            
            checkField(calldataload(add(_pubSignals, 800)))
            
            checkField(calldataload(add(_pubSignals, 832)))
            
            checkField(calldataload(add(_pubSignals, 864)))
            
            checkField(calldataload(add(_pubSignals, 896)))
            
            checkField(calldataload(add(_pubSignals, 928)))
            
            checkField(calldataload(add(_pubSignals, 960)))
            
            checkField(calldataload(add(_pubSignals, 992)))
            
            checkField(calldataload(add(_pubSignals, 1024)))
            
            checkField(calldataload(add(_pubSignals, 1056)))
            
            checkField(calldataload(add(_pubSignals, 1088)))
            
            checkField(calldataload(add(_pubSignals, 1120)))
            
            checkField(calldataload(add(_pubSignals, 1152)))
            
            checkField(calldataload(add(_pubSignals, 1184)))
            
            checkField(calldataload(add(_pubSignals, 1216)))
            
            checkField(calldataload(add(_pubSignals, 1248)))
            
            checkField(calldataload(add(_pubSignals, 1280)))
            
            checkField(calldataload(add(_pubSignals, 1312)))
            
            checkField(calldataload(add(_pubSignals, 1344)))
            
            checkField(calldataload(add(_pubSignals, 1376)))
            
            checkField(calldataload(add(_pubSignals, 1408)))
            
            checkField(calldataload(add(_pubSignals, 1440)))
            
            checkField(calldataload(add(_pubSignals, 1472)))
            
            checkField(calldataload(add(_pubSignals, 1504)))
            
            checkField(calldataload(add(_pubSignals, 1536)))
            
            checkField(calldataload(add(_pubSignals, 1568)))
            
            checkField(calldataload(add(_pubSignals, 1600)))
            

            // Validate all evaluations
            let isValid := checkPairing(_pA, _pB, _pC, _pubSignals, pMem)

            mstore(0, isValid)
             return(0, 0x20)
         }
     }
 }
