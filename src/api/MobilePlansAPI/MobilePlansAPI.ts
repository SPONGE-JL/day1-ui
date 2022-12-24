// TODO: Replace fetched data using API
function getMobilePlans(): string[] {
  const mobilePlans = ["요금제A", "요금제B", "요금제C"];
  return mobilePlans;
}

const MobilePlansAPI = {
  getMobilePlans,
};

export { MobilePlansAPI };
