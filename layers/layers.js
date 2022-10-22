ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([-63.667206, -34.265574, -61.826529, -32.417212]);
var wms_layers = [];
       
	 var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
        var lyr_OpenTopomap_2 = new ol.layer.Tile({
            'title': 'OpenTopomap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_PMD100aos_1 = new ol.format.GeoJSON();
var features_PMD100aos_1 = format_PMD100aos_1.readFeatures(json_PMD100aos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PMD100aos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PMD100aos_1.addFeatures(features_PMD100aos_1);
var lyr_PMD100aos_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PMD100aos_1, 
                style: style_PMD100aos_1,
                interactive: true,
    title: 'PMD 100 años<br />\
    <img src="styles/legend/PMD100aos_1_0.png" /> 0 mm - 62 mm<br />\
    <img src="styles/legend/PMD100aos_1_1.png" /> 62 mm - 89 mm<br />\
    <img src="styles/legend/PMD100aos_1_2.png" /> 89 mm - 116 mm<br />\
    <img src="styles/legend/PMD100aos_1_3.png" /> 116 mm - 135 mm<br />\
    <img src="styles/legend/PMD100aos_1_4.png" /> 135 mm - 156 mm<br />\
    <img src="styles/legend/PMD100aos_1_5.png" /> 156 mm - 183 mm<br />\
    <img src="styles/legend/PMD100aos_1_6.png" /> 183 mm - 1100 mm<br />'
        });
var format_IsohietasPMD100aos_2 = new ol.format.GeoJSON();
var features_IsohietasPMD100aos_2 = format_IsohietasPMD100aos_2.readFeatures(json_IsohietasPMD100aos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_IsohietasPMD100aos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IsohietasPMD100aos_2.addFeatures(features_IsohietasPMD100aos_2);
var lyr_IsohietasPMD100aos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IsohietasPMD100aos_2, 
                style: style_IsohietasPMD100aos_2,
                interactive: false,
                title: '<img src="styles/legend/IsohietasPMD100aos_2.png" /> Isohietas PMD 100 años'
            });
var format_LimiteProvincial_3 = new ol.format.GeoJSON();
var features_LimiteProvincial_3 = format_LimiteProvincial_3.readFeatures(json_LimiteProvincial_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LimiteProvincial_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteProvincial_3.addFeatures(features_LimiteProvincial_3);
var lyr_LimiteProvincial_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteProvincial_3, 
                style: style_LimiteProvincial_3,
                interactive: false,
                title: '<img src="styles/legend/LimiteProvincial_3.png" /> LimiteProvincial'
            });

lyr_GoogleMaps_0.setVisible(false);lyr_GoogleHybrid_0.setVisible(true);lyr_OpenTopomap_2.setVisible(false);lyr_PMD100aos_1.setVisible(true);lyr_IsohietasPMD100aos_2.setVisible(true);lyr_LimiteProvincial_3.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleHybrid_0,lyr_OpenTopomap_2,lyr_PMD100aos_1,lyr_IsohietasPMD100aos_2,lyr_LimiteProvincial_3];
lyr_PMD100aos_1.set('fieldAliases', {'Latitud': 'Latitud', 'Longitud': 'Longitud', 'PMD 100 añ': 'PMD 100 años [mm]', });
lyr_IsohietasPMD100aos_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_LimiteProvincial_3.set('fieldAliases', {'gid': 'gid', });
lyr_PMD100aos_1.set('fieldImages', {'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'PMD 100 añ': 'TextEdit', });
lyr_IsohietasPMD100aos_2.set('fieldImages', {'fid': 'Hidden', 'ID': 'Hidden', 'ELEV': 'TextEdit', });
lyr_LimiteProvincial_3.set('fieldImages', {'gid': 'Hidden', });
lyr_PMD100aos_1.set('fieldLabels', {'Latitud': 'inline label', 'Longitud': 'inline label', 'PMD 100 añ': 'inline label', });
lyr_IsohietasPMD100aos_2.set('fieldLabels', {'ELEV': 'no label', });
lyr_LimiteProvincial_3.set('fieldLabels', {});
lyr_LimiteProvincial_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});