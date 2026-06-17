export function getTop10(notifications) {
  const priority = {
    Placement: 3,
    Result: 2,
    Event: 1,
  };

  return notifications
    .sort((a, b) => {
      const scoreA =
        priority[a.type] * 1000000000000 + new Date(a.createdAt).getTime();

      const scoreB =
        priority[b.type] * 1000000000000 + new Date(b.createdAt).getTime();

      return scoreB - scoreA;
    })
    .slice(0, 10);
}
