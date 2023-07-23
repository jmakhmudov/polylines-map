import React from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import polyline from '@mapbox/polyline';

const Map = () => {
    const marker = {
        id: 1,
        position: [59.84660399, 30.29496392],
        title: 'Marker 1',
        description: 'This is Marker 1',
    }

    const positions = [
        [59.84660399, 30.29496392], // Start point
        [59.82934196, 30.42423701],
        [59.83567701, 30.38064206],  // Waypoint 2
        ///
        [59.983762, 30.311365],
        [59.984981, 30.345867],
        [59.984981, 30.345867]
        ///
    ];

    const positions2 = [
        [59.82934196, 30.42423701],

        [59.82761295, 30.41705607],
        // [59.984981,30.345867],
        // [59.984981,30.345867],
        // [59.983762,30.311365],
        [59.84660399, 30.29496392]
    ]

    const pos = polyline.decode('o|glJ{d|wDBSAYG_@M_@@WCMMc@QMQ?IQSi@MHI?KC_@bNIlDIfCAZC`A?RGnBAd@DV`@FTBF@n@Dd@DXD^DXCXCZKZO\\UVUX_@TWv@gAhAaBT]pBoC^i@~AyBzAuBRWZa@\\e@Xc@|B}Cl@}@xAqBbAuANSPU`AsAV[R[tAkB^i@f@s@RWn@}@X]b@k@p@_A~AuBr@_AfGaIl@w@vBqCrAgBfBuBt@}@RWfAoAjCcDhCiDfCiD~@{Ah@aAn@uAn@aBZ_AX}@r@sCTmAReAp@_ELmAPkCHeADeAFgBDgBBkB?mB?sF?iC?yAMc[AoAIcMGgMEmIAkAEqDAcA@kE?}EC{DCc@C_AAmBEoGAeDCeIC}EAuCCyG?i@B_@v@iBl@sA\\u@xEsK\\w@Qi@Sc@k@{AsBsF[y@u@qBGMYs@c@oAg@qAs@mBM]a@mAKWAKCOCOAQC[Iy@IiAKmBUaFA[OsCEiAYkGIiBM_@SSMOUuEAMGuAAOEw@KeBo@cKi@sISgDSeDCa@o@iJk@gJwAoUg@cIQcDSkDWsD[_EW}BKaAWmBe@aD_@yB]sBSsAaDeS}@kFQaAEYCKG]O{@e@qCSiAuFw\\u@qEOaA^_@Z]p@q@nBoBjBkBfDiD~BcC|@}@TULMDEJK\\[~@cAnAoAtByBRSLMHIRSXYxD}DNONOt@u@n@q@bAaATWpDsDbAcAZ]JIZ[t@w@PQdAeA`CcCHIdGgGBCjAmAbAcA\\a@EWE]U{BAOSoBEc@[aDw@yHgAaL?AGc@Go@AQGe@MsAMsAU_CWaCI}@_AqJs@eHIy@Km@G_@EWCQEWMu@SiAUsAST_B`BEWAIESSOIa@QgAjBkBVUb@lCHj@TrARhALt@DVBPDVF^Jl@Hx@r@dH~@pJH|@V`CT~BLrALrAFd@@PFn@Fb@?@fA`Lv@xHZ`DDb@RnB@NTzBD\\DVD\\B\\LpA~A`PRnBh@tFDZB\\Jz@@JRrBVjCN|BF~@Bp@@x@?z@?fA?lAExAg@hLGlACp@CZu@`QKvBWvFEhAC^Ex@Gv@Ir@K|@Mp@Oz@Mp@Ol@]vAK^Ob@M^Qd@Yn@S`@Ub@[b@o@v@ONQPONGFIHqCrCq@p@q@n@MLYZG[GYKYMGEFIJYVsAtAUT_B~AWVKJeAdAUTMTEHEFQRaB`BqApAwCxCYVe@d@STKHKHMJOHa@Ru@VkAd@[LgCbAQHKcACOYaBKLCHSxA')

    return (
        <MapContainer center={[59.84, 30.29]} zoom={13} style={{ height: '400px' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Polyline positions={pos} color="green" />
            <Marker key={marker.id} position={marker.position}>
                <Popup>
                    <h3>{marker.title}</h3>
                    <p>{marker.description}</p>
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;
