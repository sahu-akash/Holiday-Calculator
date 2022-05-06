
Design and implement a HolidayPlanner class for Visma Solutions Oy. The purpose of the
first version of the class is to:
● Take a time span as an input (for example 1.7.2020 - 29.7.2020) and return how
many holiday days a person has to use to be able to be on holiday during that period
● Take into account national holidays which do not consume holiday days
● Take into account that Saturdays consume holiday days
● Take into account that Sundays do not consume holiday days
● Accept only time spans that fit within the current holiday period

Visma Solutions Oy has specified these additional requirements for the time span:
● The maximum length of the time span is 50 days
● The whole time span has to be within the same holiday period that begins on the 1st
of April and ends on the 31st of March. For example:
○ 1.12.2020 - 2.1.2021 is a valid time span for a holiday
○ 1.3.2020 - 1.4.2020 is not a valid time span for a holiday
● The dates for the time span must be in chronological order
The implementation needs to take into account that national holidays change from year to
year and in the future the usage of the class will be extended to other countries, so it must
support national holidays for several countries. The first version needs to be able to handle
Finnish national holidays for 2020 and 2021:
● 1.1.2020
● 6.1.2020
● 10.4.2020
● 13.4.2020
● 1.5.2020
● 21.5.2020
● 19.6.2020
● 24.12.2020
● 25.12.2020
● 1.1.2021
● 6.1.2021
● 2.4.2021
● 5.4.2021
● 13.5.2021
● 20.6.2021
● 6.12.2021
● 24.12.2021
Visma Solutions Oy’s quality requirements are:
● The code must be unit testable
● The code should adhere to SOLID principles
Use about two to three hours for this task. Write a short description of how you understood
the problem, what challenges you had with the implementation and what you could further
improve in your implementation. If you had to make compromises, we would like to hear
about them.
The programming language used for this task does not matter. Use the object oriented
programming language you are most comfortable with. Return the task using GitHub or
email for us to determine if it satisfies Visma Solutions Oy’s requirements.