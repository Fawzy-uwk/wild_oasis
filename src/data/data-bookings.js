import { add } from "date-fns";

function fromToday(numDays, withTime = false) {
  const date = add(new Date(), { days: numDays });
  if (!withTime) date.setUTCHours(0, 0, 0, 0);
  return date.toISOString().slice(0, -1);
}

export const bookings = [
  // CABIN 001
  {
    created_at: fromToday(-15, true),
    start_date: fromToday(-2),
    end_date: fromToday(7),
    cabinId: 1,
    guestId: 1,
    has_breakfast: true,
    observations:
      "I have a gluten allergy and would like to request a gluten-free breakfast.",
    is_paid: false,
    guests_num: 1,
  },
  {
    created_at: fromToday(-15, true),
    start_date: fromToday(2),
    end_date: fromToday(8),
    cabinId: 1,
    guestId: 2,
    has_breakfast: true,
    observations:
      "I have a gluten allergy and would like to request a gluten-free breakfast.",
    is_paid: false,
    guests_num: 1,
  },
  {
    created_at: fromToday(-20, true),
    start_date: fromToday(-4),
    end_date: fromToday(8),
    cabinId: 1,
    guestId: 3,
    has_breakfast: true,
    observations:
      "I have a gluten allergy and would like to request a gluten-free breakfast.",
    is_paid: false,
    guests_num: 1,
  },
  {
    created_at: fromToday(-20, true),
    start_date: fromToday(-3),
    end_date: fromToday(10),
    cabinId: 1,
    guestId: 4,
    has_breakfast: true,
    observations:
      "I have a gluten allergy and would like to request a gluten-free breakfast.",
    is_paid: false,
    guests_num: 1,
  },
  {
    created_at: fromToday(-40, true),
    start_date: fromToday(0),
    end_date: fromToday(7),
    cabinId: 1,
    guestId: 5,
    has_breakfast: true,
    observations:
      "I have a gluten allergy and would like to request a gluten-free breakfast.",
    is_paid: false,
    guests_num: 1,
  },
  {
    created_at: fromToday(-22, true),
    start_date: fromToday(0),
    end_date: fromToday(7),
    cabinId: 1,
    guestId: 6,
    has_breakfast: true,
    observations:
      "I have a gluten allergy and would like to request a gluten-free breakfast.",
    is_paid: false,
    guests_num: 1,
  },

  // CABIN 002
  {
    created_at: fromToday(-4, true),
    start_date: fromToday(-1),
    end_date: fromToday(4),
    cabinId: 2,
    guestId: 7,
    has_breakfast: true,
    observations:
      "I have a gluten allergy and would like to request a gluten-free breakfast.",
    is_paid: false,
    guests_num: 1,
  },
  {
    created_at: fromToday(-50, true),
    start_date: fromToday(15),
    end_date: fromToday(17),
    cabinId: 2,
    guestId: 8,
    has_breakfast: true,
    observations:
      "I have a gluten allergy and would like to request a gluten-free breakfast.",
    is_paid: false,
    guests_num: 1,
  },
  {
    created_at: fromToday(0, true),
    start_date: fromToday(-10),
    end_date: fromToday(15),
    cabinId: 2,
    guestId: 9,
    has_breakfast: true,
    observations:
      "I have a gluten allergy and would like to request a gluten-free breakfast.",
    is_paid: false,
    guests_num: 1,
  },
  {
    created_at: fromToday(-8, true),
    start_date: fromToday(0),
    end_date: fromToday(7),
    cabinId: 2,
    guestId: 10,
    has_breakfast: true,
    observations:
      "I have a gluten allergy and would like to request a gluten-free breakfast.",
    is_paid: false,
    guests_num: 1,
  },

  // CABIN 003
  {
    created_at: fromToday(-65, true),
    start_date: fromToday(-25),
    end_date: fromToday(-20),
    cabinId: 3,
    guestId: 11,
    has_breakfast: true,
    observations: "",
    is_paid: true,
    guests_num: 4,
  },
  {
    created_at: fromToday(-10, true),
    start_date: fromToday(-10),
    end_date: fromToday(17),
    cabinId: 3,
    guestId: 12,
    has_breakfast: true,
    observations:
      "I have a gluten allergy and would like to request a gluten-free breakfast.",
    is_paid: false,
    guests_num: 1,
  },

  // CABIN 004
  {
    created_at: fromToday(-10, true),
    start_date: fromToday(-20),
    end_date: fromToday(15),
    cabinId: 4,
    guestId: 13,
    has_breakfast: true,
    observations:
      "I have a gluten allergy and would like to request a gluten-free breakfast.",
    is_paid: false,
    guests_num: 1,
  },

  // CABIN 005
  {
    created_at: fromToday(70, true),
    start_date: fromToday(14),
    end_date: fromToday(21),
    cabinId: 5,
    guestId: 14,
    has_breakfast: true,
    observations: "",
    is_paid: false,
    guests_num: 5,
  },
  {
    created_at: fromToday(-27, true),
    start_date: fromToday(0),
    end_date: fromToday(7),
    cabinId: 5,
    guestId: 15,
    has_breakfast: true,
    observations:
      "I have a gluten allergy and would like to request a gluten-free breakfast.",
    is_paid: false,
    guests_num: 2,
  },
  {
    created_at: fromToday(-25, true),
    start_date: fromToday(0),
    end_date: fromToday(7),
    cabinId: 5,
    guestId: 16,
    has_breakfast: true,
    observations:
      "I have a gluten allergy and would like to request a gluten-free breakfast.",
    is_paid: false,
    guests_num: 2,
  },
  {
    created_at: fromToday(-10, true),
    start_date: fromToday(0),
    end_date: fromToday(7),
    cabinId: 5,
    guestId: 17,
    has_breakfast: true,
    observations:
      "I have a gluten allergy and would like to request a gluten-free breakfast.",
    is_paid: false,
    guests_num: 2,
  },
  {
    created_at: fromToday(-80, true),
    start_date: fromToday(-70),
    end_date: fromToday(-60),
    cabinId: 5,
    guestId: 18,
    has_breakfast: true,
    observations:
      "I have a gluten allergy and would like to request a gluten-free breakfast.",
    is_paid: false,
    guests_num: 2,
  },

  // CABIN 006
  {
    created_at: fromToday(-20, true),
    start_date: fromToday(0),
    end_date: fromToday(10),
    cabinId: 6,
    guestId: 19,
    has_breakfast: true,
    observations:
      "I have a gluten allergy and would like to request a gluten-free breakfast.",
    is_paid: true,
    guests_num: 1,
  },

  // CABIN 007
  {
    created_at: fromToday(1, true),
    start_date: fromToday(10),
    end_date: fromToday(17),
    cabinId: 7,
    guestId: 20,
    has_breakfast: true,
    observations:
      "I have a gluten allergy and would like to request a gluten-free breakfast.",
    is_paid: false,
    guests_num: 1,
  },
  {
    created_at: fromToday(-90, true),
    start_date: fromToday(0),
    end_date: fromToday(7),
    cabinId: 7,
    guestId: 21,
    has_breakfast: true,
    observations:
      "I have a gluten allergy and would like to request a gluten-free breakfast.",
    is_paid: false,
    guests_num: 1,
  },
  {
    created_at: fromToday(-17, true),
    start_date: fromToday(0),
    end_date: fromToday(7),
    cabinId: 7,
    guestId: 22,
    has_breakfast: true,
    observations:
      "I have a gluten allergy and would like to request a gluten-free breakfast.",
    is_paid: false,
    guests_num: 1,
  },

  // CABIN 008
  {
    created_at: fromToday(-15, true),
    start_date: fromToday(0),
    end_date: fromToday(7),
    cabinId: 8,
    guestId: 23,
    has_breakfast: true,
    observations:
      "I have a gluten allergy and would like to request a gluten-free breakfast.",
    is_paid: false,
    guests_num: 1,
  },
  {
    created_at: fromToday(-10, true),
    start_date: fromToday(0),
    end_date: fromToday(7),
    cabinId: 8,
    guestId: 24,
    has_breakfast: true,
    observations:
      "I have a gluten allergy and would like to request a gluten-free breakfast.",
    is_paid: false,
    guests_num: 1,
  },
  {
    created_at: fromToday(-8, true),
    start_date: fromToday(4),
    end_date: fromToday(10),
    cabinId: 8,
    guestId: 25,
    has_breakfast: true,
    observations: "we Don`t like eggs in our food 🚫",
    is_paid: false,
    guests_num: 3,
  },
  {
    created_at: fromToday(-8, true),
    start_date: fromToday(6),
    end_date: fromToday(10),
    cabinId: 8,
    guestId: 26,
    has_breakfast: false,
    observations: "I want to wake up at 7AM",
    is_paid: true,
    guests_num: 2,
  },

  {
    created_at: fromToday(-7, true),
    start_date: fromToday(8),
    end_date: fromToday(14),
    cabinId: 8,
    guestId: 27,
    has_breakfast: true,
    observations: "I don`t like milk",
    is_paid: true,
    guests_num: 4,
  },
  {
    created_at: fromToday(-7, true),
    start_date: fromToday(8),
    end_date: fromToday(14),
    cabinId: 8,
    guestId: 27,
    has_breakfast: true,
    observations: "I don`t like milk",
    is_paid: true,
    guests_num: 4,
  },

  {
    created_at: fromToday(0, true),
    start_date: fromToday(8),
    end_date: fromToday(14),
    cabinId: 7,
    guestId: 29,
    has_breakfast: true,
    observations: "I don`t like eggs",
    is_paid: false,
    guests_num: 3,
  },
  {
    created_at: fromToday(-5, true),
    start_date: fromToday(8),
    end_date: fromToday(30),
    cabinId: 7,
    guestId: 30,
    has_breakfast: true,
    observations: "I don`t like bacon",
    is_paid: true,
    guests_num: 6,
  },

  {
    created_at: fromToday(-35, true),
    start_date: fromToday(-31),
    end_date: fromToday(-22),
    cabinId: 6,
    guestId: 31,
    has_breakfast: true,
    observations:
      "I like coffe with milk and would like to request a gluten-free breakfast.",
    is_paid: true,
    guests_num: 1,
  },

  {
    created_at: fromToday(0, true),
    start_date: fromToday(2),
    end_date: fromToday(10),
    cabinId: 6,
    guestId: 32,
    has_breakfast: true,
    observations:
      "I have a gluten allergy and would like to request a gluten-free breakfast.",
    is_paid: true,
    guests_num: 4,
  },

  {
    created_at: fromToday(-4, true),
    start_date: fromToday(-4),
    end_date: fromToday(-1),
    cabinId: 5,
    guestId: 33,
    has_breakfast: false,
    observations: "I don`t like cheese",
    is_paid: true,
    guests_num: 5,
  },
  {
    created_at: fromToday(-8, true),
    start_date: fromToday(-5),
    end_date: fromToday(0),
    cabinId: 8,
    guestId: 34,
    has_breakfast: true,
    observations:
      "My wife has a sugar allergy so I would like to request a sugar-free breakfast if possible",
    is_paid: true,
    guests_num: 9,
  },
  {
    created_at: fromToday(-2, true),
    start_date: fromToday(-2),
    end_date: fromToday(0),
    cabinId: 3,
    guestId: 35,
    has_breakfast: false,
    observations: "We will be bringing our small dog with us",
    is_paid: true,
    guests_num: 3,
  },
];
