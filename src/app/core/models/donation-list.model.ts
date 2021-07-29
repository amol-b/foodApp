interface DonationHours {
  date: string;
  quantity: string;
}
export interface Donations {
  donation_hours: DonationHours[];
  address: string;
  additional_information: string;
  cuisine_type: string;
  name: string;
}
