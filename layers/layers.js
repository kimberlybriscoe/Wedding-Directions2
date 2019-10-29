var wms_layers = [];


        var lyr_GoogleSattelite_0 = new ol.layer.Tile({
            'title': 'Google Sattelite ',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_CarPark_1 = new ol.format.GeoJSON();
var features_CarPark_1 = format_CarPark_1.readFeatures(json_CarPark_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CarPark_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CarPark_1.addFeatures(features_CarPark_1);
var lyr_CarPark_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CarPark_1, 
                style: style_CarPark_1,
                interactive: true,
                title: '<img src="styles/legend/CarPark_1.png" /> Car Park'
            });
var format_Pathway_2 = new ol.format.GeoJSON();
var features_Pathway_2 = format_Pathway_2.readFeatures(json_Pathway_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pathway_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pathway_2.addFeatures(features_Pathway_2);
var lyr_Pathway_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pathway_2, 
                style: style_Pathway_2,
                interactive: true,
                title: '<img src="styles/legend/Pathway_2.png" /> Pathway'
            });

lyr_GoogleSattelite_0.setVisible(true);lyr_CarPark_1.setVisible(true);lyr_Pathway_2.setVisible(true);
var layersList = [lyr_GoogleSattelite_0,lyr_CarPark_1,lyr_Pathway_2];
lyr_CarPark_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Pathway_2.set('fieldAliases', {'id': 'id', });
lyr_CarPark_1.set('fieldImages', {'id': '', 'Name': '', });
lyr_Pathway_2.set('fieldImages', {'id': 'TextEdit', });
lyr_CarPark_1.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_Pathway_2.set('fieldLabels', {'id': 'no label', });
lyr_Pathway_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});