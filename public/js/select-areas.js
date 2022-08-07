$(document).ready(function () {
    $('.react-video-player').selectAreas({
        minSize: [10, 10],
        // onChanged: debugQtyAreas,
        width: 500,
        areas: [
            {
                x: 10,
                y: 20,
                width: 60,
                height: 100,
            }
        ]
    });
});