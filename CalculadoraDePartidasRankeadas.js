function Calculadora_de_Partidas_Rankeadas(vitorias, derrotas) {
    let nivel;
    let Saldo_De_vitorias = vitorias - derrotas;
      
    if (Saldo_De_vitorias < 11) {
      nivel = "Ferro";
    } else if (Saldo_De_vitorias <= 20) {
      nivel = "Bronze";
    } else if (Saldo_De_vitorias <= 50) {
      nivel = "Prata";
    } else if (Saldo_De_vitorias <= 80) {
      nivel = "Ouro";
    } else if (Saldo_De_vitorias <= 90) {
      nivel = "Diamante";
    } else if (Saldo_De_vitorias <= 100) {
      nivel = "Lendário";
    } else {
      nivel = "Imortal";
    }
  
    console.log("O Herói tem de saldo de " + Saldo_De_vitorias + " está no nível de " + nivel);
  }
  Calculadora_de_Partidas_Rankeadas(vitorias = 106, derrotas = 5);