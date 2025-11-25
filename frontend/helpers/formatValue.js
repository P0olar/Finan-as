export const formatValue = (value) => {
  if (value === null || value === undefined) return "R$ 0,00";
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

export const formatDate = (value) => {
  const date = new Date(value);

  return date.toLocaleDateString('pt-BR', {
    timeZone: 'UTC',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
};
