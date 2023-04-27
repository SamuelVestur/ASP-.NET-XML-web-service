function ConfirmDelete(VINNumber) {
    var result = confirm("Ste si ist�, �e chcete odstr�ni� auto s VIN ��slom " + VINNumber + "?");
    if (result) {
        //volanie WebMethodu na odstr�nenie auta
        PageMethods.deleteCarByVin(VINNumber, OnSuccess, OnError);
    }
}

function OnSuccess() {
    //akciou po �spe�nom odstr�nen� auta
    alert("Auto bolo �spe�ne odstr�nen�.");
}

function OnError(error) {
    //akciou po chybe pri odstr�nen� auta
    alert("Do�lo k chybe pri odstra�ovan� auta.");
}