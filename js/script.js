
function sendwpp() {
    
    var name = document.getElementById("nome").value;
    var cpf = document.getElementById("cpf").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var date = document.getElementById("date").value;
    var endereco = document.getElementById("endereco").value;
    var bairro = document.getElementById("bairro").value;
    var numero = document.getElementById("numero").value;
    var cep = document.getElementById("cep").value;
    var complemento = document.getElementById("complemento").value;
    var vencimento = document.getElementById("vencimento").value;
    var planos = document.getElementById("planos").value;
    

    var url = "https://wa.me/+55718000500133?text=" 
    + "Nome: " + name + "%0a"
    + "CPF: " + cpf + "%0a"
    + "Email: " + email + "%0a"
    + "Telefone: " + telefone + "%0a"
    + "Data de Nascimento: " + date  + "%0a"
    + "Endereço: " + endereco + "%0a"
    + "Bairro: " + bairro + "%0a"
    + "NÚmero: " + numero + "%0a"
    + "Cep: " + cep  + "%0a"
    + "Complemento: " + complemento + "%0a"
    + "Vencimento: " + vencimento + "%0a"
    + "Planos: " + planos;

    window.open(url, '_blank').focus();
}

function returnsite() {
    
    var url = "./index.html"

    window.open(url, '_blank').focus();

}
