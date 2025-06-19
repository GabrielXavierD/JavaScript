document.getElementById("calcButton").addEventListener("click", function () {
  const baseValue = parseFloat(document.getElementById("baseValue").value);
  const mass = parseFloat(document.getElementById("mass").value);
  const growthMultiplier = parseFloat(document.getElementById("growthMutation").value);

  const envCheckboxes = document.querySelectorAll(".env:checked");

  let envMultiplier = 1;
  envCheckboxes.forEach((checkbox) => {
    envMultiplier *= parseFloat(checkbox.value);
  });

  // Fórmula refinada com expoente 1.72
  const totalMultiplier = growthMultiplier * envMultiplier;
  const estimatedValue = baseValue * Math.pow(mass, 1.72) * totalMultiplier;

  document.getElementById("result").innerHTML =
    "Valor estimado: " + estimatedValue.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
});
