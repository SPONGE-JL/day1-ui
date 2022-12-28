const serviceUsers: Record<number, ServiceUserData> = {};

/**
 * Represent data structure about ServiceUser
*/
class ServiceUserData {
  /**
   * Create a new readonly data ServiceUserData
   * @constructor
   * @param {Number} userId Identification of user
   * @param {String} subscriptionPlanName Name of the subscription Plan what this user has
  */
  constructor(
    public readonly userId: number,
    public readonly subscriptionPlanName: string
  ) {
    this.hasSubscriptionPlan = (subscriptionPlanName !== "");
  }

  public readonly hasSubscriptionPlan: boolean;
}

/**
 * Save a new user that has no subscription plan
 * @param {number} userId Target user's ID
 */
function hasNoSubscriptionPlan(userId: number): void {
  serviceUsers[userId] = new ServiceUserData(userId, "");
  printState();
}

/**
 * Print out on debug level
 */
function printState(): void {
  const indent = "\n\t";
  const message = "[DEBUG] Current ServiceUsers State:";
  console.debug(`${indent}${message}${indent}${JSON.stringify(serviceUsers)}`);
}

const presentServiceUser = {
  hasNoSubscriptionPlan,
};

export default presentServiceUser;
