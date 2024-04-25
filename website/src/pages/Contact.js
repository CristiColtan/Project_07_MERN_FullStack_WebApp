import React from "react";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";

import ListGroup from "react-bootstrap/ListGroup";

import { useState } from "react";
import Modal from "react-bootstrap/Modal";

import { FaHome, FaPlane, FaShieldAlt, FaEllipsisH } from "react-icons/fa";
import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";

import "../styles/Contact.css";

function Contact() {
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [showModal, setShowModal] = useState(false);

  const getQuestion = () => {
    return selectedQuestion;
  };

  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const getAnswerForQuestion = (question) => {
    switch (question) {
      case "Get help with a booking":
        return (
          <p>
            Visit the Help Center and select the booking you need help with. To
            speak with Customer Service on the phone, you can call us through
            the priority support line if you're signed in. Alternatively, you
            can call or message an accommodation directly, or send a message to
            Customer Service.
          </p>
        );
      case "I need help with something else":
        return (
          <p>
            Visit the Help Center and select the booking you need help with. To
            speak with Customer Service on the phone, you can call us through
            the priority support line if you're signed in. Alternatively, you
            can call or message an accommodation directly, or send a message to
            Customer Service.
          </p>
        );
      case "How can I contact CC Booking?":
        return (
          <p>
            Visit the Help Center and select the booking you need help with. To
            speak with Customer Service on the phone, you can call us through
            the priority support line if you're signed in. Alternatively, you
            can call or message an accommodation directly, or send a message to
            Customer Service.
          </p>
        );
      case "Can I cancel my policy?":
        return (
          <div>
            <p>
              You can cancel your policy within 14 days of buying it (10 days if
              you live in Canada), unless your trip has started or you intend to
              make a claim.
            </p>
            <p>
              To cancel it, sign in to your CC Booking account, go to
              "Bookings"/"Trips," select "Travel Insurance," then "Cancel
              insurance." If you don't have a CC Booking account, click the
              house symbol above, select "I can't find my booking," then
              "Accommodations" or "Flight," enter your booking details, select
              "See booking details," then "View booking confirmation," "Travel
              Insurance," and "Cancel insurance."
            </p>
          </div>
        );
      case "How can I complain about the insurance?":
        return (
          <p>
            If your complaint is about the insurance itself, contact the
            insurance provider. If your complaint is about the sale of the
            insurance, contact CC Booking Distribution if you live in the EEA or
            UK. Contact the insurance provider if you live anywhere else. You'll
            find the complaints procedures and contact details in your policy
            documents.
          </p>
        );
      case "Where can I find my insurance documents?":
        return (
          <p>
            You'll find links to your Policy Wording and other relevant
            documents on the CC Booking website or app, on the pages where you
            can buy the insurance. If you already bought it, you'll find the
            documents attached to the email the insurance provider sent you.
            You'll find links to the documents by signing in to your CC Booking
            account, going to "Bookings"/"Trips," and selecting "Travel
            Insurance."
          </p>
        );
      case "Can I get a refund if I cancel my policy?":
        return (
          <div>
            <p>
              Your insurance premium will be refunded in full if you cancel your
              policy within 14 days of buying it (10 days if you live in
              Canada), unless your trip has started or you intend to make a
              claim.
            </p>
            <p>
              Any refund you receive will be in the currency you paid in when
              you bought Travel Insurance, even if your Statement of Insurance
              (also called a "Certificate of Insurance") shows prices in a
              different currency. Your card issuer may charge a foreign
              transaction fee.
            </p>
            <p>
              Your refund will be processed as soon as you cancel your policy.
              You'll receive your refund within 7-12 days.
            </p>
          </div>
        );
      case "If I change my trip, am I still covered?":
        return (
          <div>
            <h6>If you live in the EEA or UK</h6>
            <p>
              If you realize that the change you're making means you won't be
              covered, you'll need to cancel your policy. In this case, you'll
              be able to cancel it up to two days before your departure date and
              have your insurance premium refunded in full.
            </p>
            <h6>If you live anywhere else</h6>
            <p>
              You can cancel your policy within 14 days of buying it (10 days if
              you live in Canada) and have your insurance premium refunded in
              full, unless your trip has started or you intend to make a claim.
            </p>
          </div>
        );
      case "If I change my destination, am I still covered?":
        return (
          <div>
            <h6>If you live in the EEA or UK</h6>
            <p>
              If you cancel it for this reason, you can cancel it up to two days
              before your departure date and have your insurance premium
              refunded in full.
            </p>
            <h6>If you live anywhere else</h6>
            <p>
              You can cancel your policy within 14 days of buying it (10 days if
              you live in Canada) and have your insurance premium refunded in
              full, unless your trip has started or you intend to make a claim.
            </p>
          </div>
        );
      case "If I change my trip dates, am I still covered?":
        return (
          <div>
            <h6>If you live in the EEA or UK</h6>
            <p>
              You'll still be covered if you move your departure date and/or
              your return date by one day, as long as this doesn't make the
              whole trip any longer. If you change your dates by any more than
              this, you'll need to cancel your policy because you won't be
              covered anymore.
            </p>
            <h6>If you live anywhere else</h6>
            <p>
              You'll still be covered if you move your departure date and/or
              your return date by up to 14 days, as long as this doesn't make
              the whole trip any longer. If you change your dates by any more
              than this, you'll need to cancel your policy because you won't be
              covered anymore.
            </p>
          </div>
        );
      case "Once I've bought the insurance, can I change who's insured or insure additional travelers?":
        return (
          <div>
            <p>
              No. When you're buying the insurance, you can buy it for other
              people (as well as yourself). But once you've bought the
              insurance, you can't change who's insured or insure additional
              travelers. You'll need to cancel your policy because you won't be
              covered anymore.
            </p>
            <h6>If you live in the EEA or UK</h6>
            <p>
              If you need to cancel your policy because your Statement of
              Insurance (also called a "Certificate of Insurance") shows that
              someone isn't covered, you can cancel it up to two days before
              your departure date and have your insurance premium refunded in
              full.
            </p>
            <h6>If you live anywhere else</h6>
            <p>
              You can cancel your policy within 14 days of buying it (10 days if
              you live in Canada) and have your insurance premium refunded in
              full, unless your trip has started or you intend to make a claim.
            </p>
          </div>
        );
      case "Can I change my insurance?":
        return (
          <div>
            <p>
              You can't change your policy, but there's some flexibility built
              into it, as explained in these FAQs:
            </p>
            <p>1. If I change my trip dates, am I still covered?</p>
            <p>2. If I change my destination, am I still covered?</p>
            <p>
              3. Once I've bought the insurance, can I change who's insured or
              insure additional travelers?
            </p>
          </div>
        );
      case "My trip includes one or more bookings that I didn't make with CC Booking. Am I covered?":
        return (
          <div>
            <h6>If you live in Canada</h6>
            <p>
              The insurance covers non-refundable costs related to the booking
              you made with CC Booking (as well as medical expenses, personal
              possessions, etc.), as long as they're within your period of
              insurance. For full details of when and where you're covered,
              check your Certificate of Insurance and your Policy Wording.
            </p>
            <h6>If you live anywhere else</h6>
            <p>
              You'll still be covered if you move your departure date and/or
              your return date by up to 14 days, as long as this doesn't make
              the whole trip any longer. If you change your dates by any more
              than this, you'll need to cancel your policy because you won't be
              covered anymore.
            </p>
          </div>
        );
      case "I haven't received my insurance documents. Where can I find them?":
        return (
          <div>
            <p>
              You should have received an email from the insurance provider when
              you bought the insurance. If you can't find it in your inbox,
              check your spam or junk folder.
            </p>
            <p>
              If you still can't find it, sign in to your CC Booking account, go
              to "Bookings"/"Trips" and select "Travel Insurance." There, you'll
              find links to your insurance documents, along with the email
              address you gave us.
            </p>
          </div>
        );
      case "When does the insurance start and end?":
        return (
          <div>
            <p>
              The trip cancellation coverage starts when you buy the insurance
              and ends when your trip begins.
            </p>
            <p>
              The rest of the coverage starts on your departure date and ends on
              your return date, which you'll find in your Statement of Insurance
              (also called a "Certificate of Insurance"). If you booked a
              one-way flight with us, check your Statement of Insurance.
            </p>
          </div>
        );
      case "Does this policy have an excess?":
        return (
          <p>
            It depends what your claim is about. For more details, check the
            schedule of benefits in your Policy Wording.
          </p>
        );
      case "What does Travel Insurance cover?":
        return (
          <div>
            <h6>If you live in Canada</h6>
            <p>
              Travel Insurance protects you and any other insured persons
              traveling with you, as well as your personal possessions and the
              booking you made with CC Booking. It provides cover for trip
              cancellation, trip interruption, repatriation, emergency medical
              expenses (in some cases), and more. Check your Policy Wording for
              more information.
            </p>
            <h6>If you live anywhere else</h6>
            <p>
              Travel Insurance protects you and any other insured persons
              traveling with you, as well as your personal possessions and
              pre-booked travel arrangements. It provides cover for trip
              cancellation, trip interruption, repatriation, emergency medical
              expenses (in some cases), and more. Check your Policy Wording for
              more information.
            </p>
          </div>
        );
      case "Where am I covered?":
        return (
          <p>
            Your policy covers you for trips within the region shown in your
            Statement of Insurance (also called a "Certificate of Insurance"),
            which depends on the accommodations' location or the flight
            destination you booked with CC Booking.
          </p>
        );
      case "Are there any exclusions?":
        return (
          <p>
            Yes. There are general exclusions that apply to the entire policy.
            There are also specific exclusions that only apply to certain
            sections of the policy. Check the Policy Wording for full details.
          </p>
        );
      case "Is Covid-19 covered?":
        return (
          <div>
            <p>
              Check your Policy Wording for exclusions and other details,
              including what counts as acceptable proof of a positive diagnosis.
            </p>
            <p>
              If you live in Canada, the rules about cancellation coverage are
              slightly different. Check your Policy Wording.
            </p>
          </div>
        );
      case "Who does the insurance cover?":
        return (
          <p>
            Your Statement of Insurance (also called a "Certificate of
            Insurance") explains who is covered.
          </p>
        );
      case "Is cover available if the authorities advise against visiting my destination?":
        return (
          <p>
            If your government, a national authority, or the World Health
            Organization advises against all travel (or all but essential
            travel) to a country or area, you won't be covered if you go there.
          </p>
        );
      case "Are pre-existing medical conditions covered?":
        return (
          <p>
            In general, this policy doesn't cover claims relating to existing
            medical conditions. Check your Policy Wording for full details.
          </p>
        );
      case "Are winter sports covered?":
        return (
          <p>
            Your policy coverage may vary depending on your specific policy. For
            full details on whether winter sports are covered, check your Policy
            Wording.
          </p>
        );
      case "Are there any age limits for the policy?":
        return (
          <p>
            Your policy may include certain restrictions and/or limitations
            depending on the specific policy and jurisdiction. For full details
            on whether certain restrictions and/or limitations apply, check your
            Policy Wording. You must be 18 or over to buy it.
          </p>
        );
      case "Where can I find the cover limits?":
        return (
          <p>
            For full details on cover limits, check the schedule of benefits at
            the start of your Policy Wording.
          </p>
        );
      case "Am I covered for stolen or damaged personal possessions?":
        return (
          <p>
            Yes - you're covered up to the limits stated in your Policy Wording
            if any insured person has their personal possessions accidentally
            damaged, stolen, or destroyed during your trip.
          </p>
        );
      case "Am I covered for medical emergencies during my trip?":
        return (
          <p>
            Yes - any insured person will be covered for emergency medical
            treatment and related expenses if they fall ill or are injured
            during the trip, as long as it's not related to an existing medical
            condition. They'll also be covered for the cost of returning home if
            necessary. If any insured person is injured or reported missing, the
            policy will cover "search and rescue" costs.
          </p>
        );
      case "Am I covered if I need to cancel my trip?":
        return (
          <div>
            <p>
              The policy will provide trip cancellation cover if you unavoidably
              need to cancel your trip before it starts for any reason the
              policy covers, including the following:
            </p>
            <p>
              1. An insured person or their close relative dies, is injured, or
              falls ill, or
            </p>
            <p>2. There's a natural disaster in the area you're visiting, or</p>
            <p>
              3. An insured person is diagnosed with Covid-19 no more than 14
              days before the departure date. Check your Policy Wording for
              details, including what counts as acceptable proof of a positive
              diagnosis.
            </p>
            <p>
              Exclusions and cover limits apply. For details, including a full
              list of reasons, check your Policy Wording.
            </p>
          </div>
        );
      case "How do I make a claim?":
        return (
          <p>
            If you want to submit a claim, make sure you keep a copy of any
            documentation or other evidence (e.g. police reports, medical
            reports, invoices, photos of damage, etc.). To submit a claim, sign
            in to your CC Booking account, go to "Bookings"/"Trips," select
            "Travel Insurance," then "Submit claim." If you don't have a CC
            Booking account, click the house symbol above, select "I can't find
            my booking," then "Accommodations" or "Flight," enter your booking
            details, select "See booking details," then "View booking
            confirmation," "Travel Insurance," and "Submit claim." Check your
            Policy Wording for full details.
          </p>
        );
      case "If I already have travel insurance and buy this insurance through CC Booking as well, which insurance should I claim on?":
        return (
          <p>
            If at the time of an incident it's covered by both this insurance
            and another insurance, you can claim on both policies - but we won't
            pay more than our proportional share.
          </p>
        );
      case "I have contracted Covid-19. What proof do I need to submit a trip cancellation claim?":
        return <p>Check the cancellation section of your Policy Wording.</p>;
      case "My trip has started and I have to cut it short. Is the cost of the rest of the trip covered?":
        return (
          <p>
            The policy will provide trip interruption cover if you unavoidably
            need to cut your trip short for any reason the policy covers. Check
            your Policy Wording for more details. Exclusions apply.
          </p>
        );
      case "What do I need to do in the event of a medical emergency?":
        return (
          <div>
            <p>
              Contact the emergency assistance service. You'll find their phone
              number in your Policy Wording, or go to "Bookings"/"Trips" in your
              CC Booking account and select "Travel Insurance."
            </p>
            <p>
              They may ask you for trip details like your policy number,
              departure date, and return date, which you'll find in your
              Statement of Insurance (also called a "Certificate of Insurance").
            </p>
          </div>
        );
      case "My personal possessions were lost, stolen, or damaged. What should I do?":
        return (
          <div>
            <p>
              Report any theft or loss to the police as soon as you can and
              request a written police report.
            </p>
            <p>
              If you believe that any theft, loss, or damage was the fault of an
              airline, accommodation provider, or other company, report it to
              them in writing as well.
            </p>
            <p>
              Make sure you keep a copy of any reports, photos of damage,
              tickets, luggage tags, etc.
            </p>
          </div>
        );
      case "Who is the insurer?":
        return (
          <div>
            <p>Zurich Insurance</p>
            <p>
              Head Office: The Zurich Centre, 3000 Parkway, Whiteley, Fareham,
              Hampshire
            </p>
            <p>PO15 7JZ</p>
            <p>United Kingdom</p>
          </div>
        );
      case "How much does the insurance cost?":
        return (
          <p>
            The cost of the policy is shown on your Statement of Insurance, and
            is linked to the cost of your chosen accommodation booking from CC
            Booking.
          </p>
        );
      case "Can the insurer terminate the contract?":
        return (
          <p>
            Yes, although it is rare. Please refer to the 'Cancellation by us'
            section of your Policy Wording, under 'General conditions'.
          </p>
        );
      case "How does Zurich handle customer data?":
        return (
          <p>
            You can find full details of how Zurich processes personal data in
            the 'Data Privacy policy' section of your Policy Wording.
          </p>
        );
      case "I would like to report a complaint. How can I do this?":
        return (
          <p>
            Please refer to the 'Our complaints procedure' section of your
            Policy Wording, where you will find full contact details.
          </p>
        );
      case "If another person is added to the booking, what do I have to do to include this person in the insurance?":
        return (
          <p>
            Additional travellers cannot be insured. You would need to cancel
            your existing booking (and this insurance policy) and then pay for a
            new booking (with a new insurance policy).
          </p>
        );
      case "What do I have to do if I move the date of the booking?":
        return (
          <p>
            Please contact CC Booking. You would need to cancel your existing
            booking (and this insurance policy) and then pay for a new booking
            (with a new insurance policy).
          </p>
        );
      case "Do I have to cancel the insurance contract after completing the trip?":
        return (
          <p>
            No, the insurance policy expires automatically once you check in to
            the accommodation, or (if you have not yet checked in) at the end of
            the day when you were due to check in.
          </p>
        );
      case "When is the premium due?":
        return (
          <p>The premium is due immediately when you purchase the insurance.</p>
        );
      case "Do I have to take out separate insurance again for my next trip?":
        return <p>Yes, if you wish to be covered.</p>;
      case "What should I do if I cannot make the journey because scheduled flight has been cancelled?":
        return (
          <p>
            This event is not insured. Please contact your airline / travel
            agent as appropriate.
          </p>
        );
      case "My car broke down or my train was at a standstill for 2 hours, which is why I missed my flight and could not make the journey. Is this insured?":
        return (
          <p>
            This event is not insured. Please contact your airline / travel
            agent as appropriate.
          </p>
        );
      case "Can I take out an insurance policy that covers all travel arrangements within the next 12 months?":
        return (
          <p>
            Room Cancellation Insurance will only cover the accommodation
            booking(s) you have made in a single transaction. You should ensure
            you have wider appropriate insurance for your travel needs.
          </p>
        );
      case "Is there an excess?":
        return <p>No.</p>;
      case "What does Room Cancellation Insurance cover?":
        return (
          <p>
            Room Cancellation Insurance provides cover for unused accommodation
            should you need to cancel your room booking for one of the three
            reasons specified in your Policy Wording. Please refer to your
            Policy Wording for more information.
          </p>
        );
      case "Who is insured on the policy?":
        return (
          <p>
            The Insured Person and Guests covered by the policy are detailed on
            your Statement of Insurance.
          </p>
        );
      case "Is cover available if the authorities in my home country advise against entering my destination?":
        return (
          <p>
            This is only covered under event 3 of your policy and only if you
            booked your accommodation at a time when advice was permitting
            travel.
          </p>
        );
      case "I have contracted COVID-19. Do I need a positive PCR result to file a claim or is a doctor's certificate sufficient?":
        return (
          <p>
            If you need to make a claim under Event 3, you will need to provide
            (as appropriate) either a certificate issued by a medical
            practitioner or hospital confirming a guest's symptoms or diagnosis
            with COVID-19, or suitable evidence that the guest has personally
            received an official NHS test and trace or NHS COVID-19 app
            notification instructing them to self-isolate as a direct result of
            being exposed to someone who has been diagnosed with COVID-19.
          </p>
        );
      case "Is repatriation after an accident during the trip insured?":
        return <p>No.</p>;
      case "If I have a successful claim, how will the payment be made?":
        return (
          <p>
            Any refund due will be transferred to the bank account that you
            indicated when submitting the claim.
          </p>
        );
      case "Which documents are needed to support a claim?":
        return (
          <div>
            <p>It depends on the reason for cancelling the trip:</p>
            <p>1. In case of illness: a medical certificate</p>
            <p>2. In the event of death: a death certificate</p>
          </div>
        );
      case "How much baggage can I bring?":
        return (
          <p>
            You can see baggage allowance during the booking process. Depending
            on the flight, you may have the option to add more bags for an
            additional fee.
          </p>
        );
      case "What is the maximum size for a carry-on or checked bag?":
        return (
          <p>
            It can be different for each flight and airline. It's best to check
            the airline's website for exact weight and dimension restrictions.
          </p>
        );
      case "Can I add more bags to my flight?":
        return (
          <p>
            Some flights allow you to add more baggage during the booking
            process or after you've made a booking.
          </p>
        );
      case "Can I add a special or oversized bag?":
        return (
          <p>
            After booking your flight, contact us and we'll help add them to
            your flight booking.
          </p>
        );
      case "What can I bring in my carry-on bag?":
        return (
          <p>
            It can be different for each airline, but there are generally strict
            rules around bringing any liquids or sharp objects.
          </p>
        );
      case "Can I bring baby food or medicine in my baggage?":
        return (
          <p>
            Liquids that are essential for medical purposes or infants are
            usually permitted when going through security. This isn't the case
            worldwide, so check the airport and airline's websites for their
            policies before you travel.
          </p>
        );
      case "Can I take a pet with me?":
        return (
          <p>
            It's possible to travel with your pet on some airlines. You'll have
            to contact us to request this, and we'll check with the airline for
            you. There will be a fee to add a pet to your booking.
          </p>
        );
      case "Can I select the seats for my flight?":
        return (
          <p>
            Depending on your flight, you might have the option to select your
            seats during the booking process. Some airlines might charge an
            extra fee for this.
          </p>
        );
      case "Where is my flight booking?":
        return (
          <p>
            If you make any changes to your booking, they might not be updated
            in your booking details. However, you should receive a new
            confirmation email once the changes are confirmed.
          </p>
        );
      case "When do I add my passport/ID details?":
        return (
          <p>
            This depends on the airline and the destination you're flying to. In
            most cases, you'll need to add them when booking or checking in for
            the flight. Some airlines might also send an email to request for
            your passport/ID details.
          </p>
        );
      case "How do I check in for my flight?":
        return (
          <div>
            <p>You can check in through the airline website.</p>
            <p>
              In some cases, you can also check in at the airline's check-in
              counter or self-service kiosks at the airport. However, some
              airlines may charge additional fees for checking in at the
              airport. Check the airline's website for specific times and
              alternative ways to check in.
            </p>
          </div>
        );
      case "Where can I find my boarding pass?":
        return (
          <p>
            You'll get your boarding pass from the airline after you've
            successfully checked in. When checking in online, airlines usually
            offer options for how to receive your boarding pass, but most will
            send it to you by email.
          </p>
        );
      case "What's a self-transfer flight?":
        return (
          <p>
            When a route includes multiple flights to a destination, you need to
            transfer from one flight to another. Usually, this is managed by the
            airline. With a self-transfer flight, you're responsible for your
            own transfer because your flight tickets are separate purchases.
          </p>
        );
      case "Can I book tickets for a child traveling alone?":
        return (
          <p>
            It's not possible to book tickets for unaccompanied children with
            us. Some airlines may allow this, so check their policies and book
            with them directly.
          </p>
        );
      case "How do I book for a big group?":
        return (
          <p>
            Due to airline restrictions, you can book for a maximum of nine
            people at a time. If there are more than nine of you, you'll need to
            make an additional booking.
          </p>
        );
      case "What's a flexible ticket?":
        return (
          <p>
            After booking your flight, contact us and we'll help add them to
            your flight booking.
          </p>
        );
      case "What are SMS updates?":
        return (
          <p>
            Some flights offer flight updates by text. You can add it when you
            book your flight. It's only compatible with smartphones.
          </p>
        );
      case "How should I enter my name in the traveler details?":
        return (
          <p>
            Enter your name exactly as it appears on your passport/travel
            document. Airlines are usually very strict about this. You might not
            be allowed to board your flight if the name on your passport/travel
            document and ticket don't match.
          </p>
        );
      case "Can I add my frequent flyer number?":
        return (
          <p>
            Unfortunately, it's not possible to add your frequent flyer details
            while making a booking with us yet.
          </p>
        );
      case "How do I pay?":
        return (
          <p>
            We accept credit and debit cards. Depending on your location, you
            might also have the option to pay with Apple Pay, PayPal, iDeal,
            Sofort, or CC Booking Wallet Credits.
          </p>
        );
      case "Do you charge credit card fees?":
        return (
          <p>
            No, we don't charge any credit card fees. You can see exactly what
            you're paying for in the price breakdown.
          </p>
        );
      case "How does CC Booking calculate a flight's estimated carbon emissions?":
        return (
          <p>
            We calculate a flight's estimated CO2e emissions using Travalyst's
            Travel Impact Model. The model combines per-passenger data about
            route, aircraft, cabin class, seat, and load. This data is then
            compared with similar flights we offer to determine the average.
            Flights marked 'typical' are within 6% of the middle value of all
            comparable flights.
          </p>
        );
      case "What is Cancel for Any Reason?":
        return (
          <p>
            Cancel for Any Reason is an ancillary you can add during booking
            that allows you to cancel your flight booking for any reason, up to
            24 hours before your first flight's departure time (and before any
            check-in) - no questions asked.
          </p>
        );
      case "Can I change the name on my ticket?":
        return (
          <p>
            Airlines don't usually allow name changes or corrections. If it is
            possible, there are additional fees. Contact us for help looking
            into this.
          </p>
        );
      case "Why can't I see the changes I made in the flight booking details?":
        return (
          <p>
            If you make any changes to your booking, they might not be reflected
            in your booking details on your CC Booking account. However, you
            should receive a new confirmation email once the changes are
            confirmed.
          </p>
        );
      case "What does the refund process look like?":
        return (
          <p>
            If you're eligible for a refund, we can send a refund application to
            the airline on your behalf. Once the request is approved by the
            airline and the amount has been refunded to us, we'll process your
            refund per the airline's policy. The refund amount will be paid out
            to your original form of payment.
          </p>
        );
      case "How long is the refund process?":
        return (
          <p>
            Unfortunately, we're unable to specify when you'll receive your
            refund amount as it depends on the airline's handling times.
            However, we'll do our best to get your refund to you as soon as
            possible. We'll also email you once we've sent the refund to your
            account.
          </p>
        );
      case "I received a voucher/open ticket. How does it work?":
        return (
          <p>
            After booking your flight, contact us and we'll help add them to
            your flight booking.
          </p>
        );
      case "How do I change my flight with a flexible ticket?":
        return (
          <p>
            You'll have to call us, at the latest, 24 hours before the original
            or new flight's departure. That way, we'll have enough time to check
            the availability and book the new flight.
          </p>
        );
      case "Can I add an infant to my booking?":
        return (
          <p>
            If you already booked your flight but didn't include an infant
            traveling with you, contact us and we can help add them.
          </p>
        );
      case "Can I cancel my flight?":
        return (
          <p>
            It depends on the airline's policy and your ticket's fare rules.
          </p>
        );
      case "Do I get a refund if my flight is canceled?":
        return (
          <p>
            It depends on the airline's policy. If the airline does offer
            refunds, we can claim and process the repayment for you. The refund
            then goes back to the account you paid from. While we'll get this
            done as fast as we can, it's highly dependent on the airline's
            handling times.
          </p>
        );
      case "How do I cancel my flight with Cancel for Any Reason?":
        return (
          <p>
            Cancel online by visiting your booking details page on the CC
            Booking website. You can also contact our Customer Service either by
            phone or live chat when available, through the Help Center.
            Canceling via any other channel will not be valid.
          </p>
        );
      case "I can't find my confirmation email. What should I do?":
        return (
          <p>
            Your confirmation is sent to the email you entered when booking.
            Check your email inbox and spam folders.
          </p>
        );
      case "Where can I find my flight ticket?":
        return (
          <p>
            After booking your flight, contact us and we'll help add them to
            your flight booking.
          </p>
        );
      case "Is my booking ATOL protected (UK Customers Only)?":
        return (
          <p>
            If you received an ATOL certificate when booking your flight, it is
            ATOL protected. Your ATOL certificate contains info about your
            flight, including date, passengers traveling, airline marketing
            and/or operating the flight, and cost. If you made a change directly
            with the airline or the airline has contacted you directly to alter
            your flight but you don't see the change reflected on your
            certificate, contact us so we can make the relevant changes. In some
            circumstances, we might need to see a copy of your flight details as
            confirmed by the airline to update it.
          </p>
        );
      case "Will my layover give me enough to get to the next flight?":
        return (
          <p>
            If your connecting flight is with the same airline, they should
            provide enough time for you to get to your next flight comfortably.
            It's best to check estimates on the airport's website, as well as
            the airline's policy on assistance if you miss a connecting flight.
          </p>
        );
      case "How do I know if my flight is on time?":
        return (
          <p>
            You can check your flight's status by entering the flight number on
            the airline or airport's website.
          </p>
        );
      case "Why did my flight time change?":
        return (
          <p>
            Sometimes airlines have to reschedule flights, which can impact your
            flight route and time. If there are issues with the new flight
            schedule, contact us for help. We normally have limited flight
            options provided by the airline, but we'll do our best to find a
            solution for you.
          </p>
        );
      case "How do I make a travel insurance claim?":
        return (
          <p>
            If you included travel insurance when you booked your flight, the
            insurance provider (either Solid or XCover) should be able to help
            you make a claim. You can find the name of your insurance provider
            and all the info you need in your insurance documents, which can be
            found on your booking details page.
          </p>
        );
      case "Why is Ryanair asking me to verify my identity?":
        return (
          <p>
            If you booked a Ryanair flight through CC Booking, there's a chance
            Ryanair will ask you to verify your identity before check-in.
            Whether you complete this step or not, your flight ticket remains
            valid and you're entitled to board the flight. Ryanair asks for this
            information to confirm your contact details and ensure passengers'
            safety. You'll receive an email directly from Ryanair if you're
            required to complete this step, which will contain all the
            information you need. Ryanair also charges approximately 0.50 euro
            per booking for this verification, as an admin fee.
          </p>
        );
      case "Can I get an invoice?":
        return (
          <p>
            You can download proof of payment from your flight's booking details
            page. You can find this page when your booking is confirmed, or
            under your bookings.
          </p>
        );
      case "Can I pay in installments?":
        return (
          <p>
            If you're making a flight booking while in Brazil, you can pay in up
            to 12 installments. Select how many installments you want to pay in
            when finalizing your booking. You must pay using an Elo, Visa,
            Hipercard, or Mastercard.
          </p>
        );
      case "How do I make a booking for an infant?":
        return (
          <p>
            To book a ticket for an infant, add a child traveler when searching
            for your flight. You can't make bookings with more infants than
            adults. Each infant must have an adult accompanying them for safety
            reasons.
          </p>
        );
      case "I misspelled a traveler's name. Can I correct it?":
        return (
          <p>
            Most airlines don't allow changes or corrections to traveler names,
            but we'll help you look into this if you contact us.
          </p>
        );
      case "How can I request special assistance?":
        return (
          <p>
            After your booking is confirmed, just contact us and we can help
            arrange it.
          </p>
        );
      case "Will I get a refund?":
        return (
          <p>
            It depends on the airline's policy. Check the airline's website to
            see what refund policy they offer at the moment. Some airlines offer
            vouchers or rebooking options. While we're subject to each airline's
            rules, we'll do all we can to help you.
          </p>
        );
      case "How long will my refund take?":
        return (
          <p>
            Due to the current situation, the refund handling time will take
            longer than normal. We're unable to specify an exact time frame for
            the refund since airlines are also under a massive workload, but
            we'll do our best to get your refund to you as soon as possible.
            You'll receive an email when your refund has been processed, so wait
            for this to come through.
          </p>
        );
      case "How will you keep me informed about updates?":
        return (
          <p>
            You'll receive an email when your change or refund is processed. We
            ask you not to contact us for updates on your request, and instead
            wait for further info via email.
          </p>
        );
      case "Where can I cancel or change my tickets?":
        return (
          <p>
            First, make sure that your flight is subject to Force Majeure rules
            by checking with your airline. Keep in mind that not all airlines
            follow the same policy for refunds and rebookings, and that we are
            subject to each airline's rules for each case.
          </p>
        );
      case "Can you help me claim a refund from the airline I was going to fly with?":
        return (
          <p>
            Because of the Covid-19 outbreak, the airline industry is facing an
            extraordinary situation with a large number of flight cancellations
            and payment refunds. If you want to change or cancel your flight
            reservation, we'll contact the airline on your behalf to change your
            ticket or provide you with a refund or voucher after receiving it
            from the airline, depending on the applicable airline policy
            currently.
          </p>
        );
      case "Do I need a health certificate to travel?":
        return (
          <p>
            Some countries under lockdown might require self-certification or
            other documents. Refer to the IATA travel center or info from
            government websites, your embassy, or consulate.
          </p>
        );
      case "Where can I see the restrictions each country has enabled due to the coronavirus?":
        return (
          <p>
            For the most recent updates on travel in different areas refer to
            the IATA travel center, or your government, embassy, or consulate
            websites.
          </p>
        );
      case "Can I cancel my booking?":
        return (
          <p>
            Yes - any cancellation fees are determined by the property and
            listed in your cancellation policy. You'll pay any additional costs
            to the property.
          </p>
        );
      case "If I need to cancel my booking, will I pay a fee?":
        return (
          <p>
            If you have a free cancellation booking, you won't pay a
            cancellation fee. If your booking isn't free to cancel anymore or is
            non-refundable, you may incur a cancellation fee. Any cancellation
            fees are determined by the property, and you'll pay any additional
            costs to the property.
          </p>
        );
      case "How do I know if my booking was canceled?":
        return (
          <p>
            After you cancel a booking with us, you should get an email
            confirming the cancellation. Make sure to check your inbox and
            spam/junk mail folders. If you don't receive an email within 24
            hours, contact the property to confirm they got your cancellation.
          </p>
        );
      case "Where can I find my property's cancellation policy?":
        return <p>You can find this in your booking confirmation.</p>;
      case "What payment methods are accepted?":
        return (
          <p>
            Credit cards are the most widely accepted payment method for
            properties listed on CC Booking. Many properties also require users
            to provide a valid credit card to reserve bookings that aren't paid
            for in advance.
          </p>
        );
      case "I was charged. Do I need to do anything?":
        return (
          <p>
            In most cases, no action is required from you. As outlined in the
            payment policy for your booking, this is likely just a prepayment
            for all or part of the total cost.
          </p>
        );
      case "Where can I see the payment policy for my booking?":
        return (
          <p>
            You'll find the payment policy in your booking confirmation, in the
            pricing section. This section also includes a price breakdown and
            the accepted payment methods.
          </p>
        );
      case "Why do I need to provide my card details?":
        return (
          <p>
            Properties normally request this to guarantee your booking, and the
            card is often used to pay when you book. If you don't need to make a
            prepayment, then they may hold an amount on your card to make sure
            it has sufficient funds. This test payment will be returned to you.
          </p>
        );
      case "Can I pay for my stay with a different credit card than the one used to book?":
        return (
          <p>
            It's very likely, yes. Properties usually accept payment for a stay
            with a different card or cash. To confirm that paying with a
            different credit card is okay, contact the property.
          </p>
        );
      case "Why do I need to provide my credit card details?":
        return (
          <p>
            Properties request this to confirm your reservation. You may be
            pre-authorized* to ensure that your credit card is valid and has
            sufficient funds. In some cases, your details are used to pay for
            your stay when you book.
          </p>
        );
      case "Who's going to charge my credit card and when?":
        return (
          <p>
            Generally, the property is responsible for charging your card. If
            payment is instead handled by CC Booking, this will be stated
            clearly in your booking confirmation.
          </p>
        );
      case "How do I get more info about the room or property's facilities?":
        return (
          <p>
            You can find the room and property facilities in your booking
            confirmation.
          </p>
        );
      case "Is it possible to get an extra bed or crib for a child?":
        return (
          <p>
            It depends on the property's policy. Additional costs for children,
            including extra beds/cribs, aren't included in the reservation
            price. Contact the property directly for this info.
          </p>
        );
      case "How can I get an invoice?":
        return (
          <p>
            The property can provide you with an invoice for your stay, so
            please contact them directly.
          </p>
        );
      case "Will I pay the full price for my children?":
        return (
          <p>
            Additional costs for children, if any, aren't included in the
            reservation price. Check with the property directly to see if and
            when you'll pay for your child(ren).
          </p>
        );
      case "Why does the property's email address end with @property.CC Booking?":
        return (
          <p>
            For each reservation, CC Booking provides a unique and anonymous
            alias email address for both you and the property. All messages sent
            to this alias email will be forwarded to the property, including
            links, images, and attachments (up to 15 MB).
          </p>
        );
      case "What is the difference between a Double Room and a Twin Room?":
        return (
          <p>
            A Double Room has one double/full bed and a Twin Room has 2 twin
            beds. If a room is called Double/Twin, it can be set up for either
            type. You can specify your bed-type preference in the "Special
            Requests" box during the booking process.
          </p>
        );
      case "What do 'non-refundable' and 'free cancellation' mean?":
        return (
          <p>
            Every room or property has an individual policy determined by the
            property.
          </p>
        );
      case "Can I request an extra bed in my room and will there be an extra charge?":
        return (
          <p>
            Information about extra beds is found under “House Rules” on the
            property page when you book.
          </p>
        );
      case "Is breakfast included in the price?":
        return (
          <p>
            Each room or accommodation you can book has its own breakfast
            policy. If breakfast is included, you'll see it listed on the
            property page when you compare different options to book. If
            breakfast isn't included, you can see if the property provides it by
            checking its available facilities. After you book, this info can
            also be found in your confirmation email and in your bookings in
            your account.
          </p>
        );
      case "What does the price include?":
        return (
          <p>
            All the facilities listed under the room or accommodation type are
            included in the price. You can also see if other things like
            breakfast, taxes, or service charges are included when you compare
            different options to book. After you book, this info can also be
            found in your confirmation email and in your bookings in your
            account.
          </p>
        );
      case "Are the prices shown on CC Booking per person or per room?":
        return (
          <p>
            The price we show is for the room for the entire length of the stay,
            unless otherwise stated in the room type and description.
          </p>
        );
      case "Are taxes included in the price?":
        return (
          <p>
            This depends on the property and accommodation type, but it's easy
            to see what's included when you compare different options to book.
            Tax requirements change from country to country, so it's always good
            to check. After you book, this info can also be found in your
            confirmation email and in your bookings in your account.
          </p>
        );
      case "Do I pay a reservation fee to CC Booking?":
        return <p>No, we don't charge any fees at all.</p>;
      case "What does the crossed out rate mean next to my room type?":
        return (
          <p>
            In the event of a crossed-out rate, we look at the prices currently
            being charged by the hotel in the 30-day window around your proposed
            check-in date. From the prices within this window, we display the
            third-highest price on offer as the crossed-out rate. To ensure we
            are making a fair comparison, we always use the same booking
            conditions (meal plan, cancellation policy and room type). This
            means that you get the same room for a lower price compared to other
            check-in dates at the same time of year.
          </p>
        );
      case "Can I use discount coupons (e.g. issued by magazines, stores, etc. )?":
        return (
          <p>
            No, you cannot use discount coupons when booking on our website. In
            such cases you will need to follow the instructions given by the
            organization issuing the coupon.
          </p>
        );
      case "Does CC Booking offer any special consideration discounts, or discounts with airline or hotel loyalty cards?":
        return (
          <p>
            CC Booking provides the best available rates for the dates of your
            stay. It's not possible to have any further reductions on the price.
          </p>
        );
      case "Do I pay the full price for my child?":
        return (
          <p>
            Find info about a property's children policy under “House Rules” on
            the property page when you book.
          </p>
        );
      case "Can I use a debit card to complete my reservation?":
        return (
          <p>
            In general, hotels can't accept a debit card to guarantee a booking.
            However, there are some exceptions. You'll be able see if it is
            possible during the booking process.
          </p>
        );
      case "Can I make a reservation without a credit card?":
        return (
          <p>
            You'll need a valid credit card to guarantee your reservation with
            most properties. However, we offer a number of hotels that will
            guarantee your booking without a card. You can also make a booking
            by using someone else's card, provided you have their permission. In
            this case, confirm the card holder's name and that you have
            permission to use their card in the "Special requests" box when
            booking.
          </p>
        );
      case "What's the difference between a pre-authorization and an actual charge to my credit card?":
        return (
          <p>
            Pre-authorizations are common but are often confused with actual
            charges. While in-store purchases are immediately charged and
            deducted from your available balance, pre-authorizations are
            temporary holds. The length of the hold will vary, and your credit
            card company can advise you on how they handle this.
          </p>
        );
      case "How will I know if my card has been pre-authorized?":
        return (
          <p>
            Your available balance will be reduced temporarily by the full
            amount of your reservation. You may also see “pending transactions”
            on your credit card account summary. If you're not sure if your card
            has been pre-authorized, both the hotel and your credit card company
            can verify this.
          </p>
        );
      case "Can I make a reservation for myself using someone else's credit card?":
        return (
          <p>
            Yes, but only if you have permission from the cardholder. When you
            make the booking, state that you're using someone else's card with
            their permission in the “Special requests” box. The property may
            require authorization from the cardholder. In the case of a no-show
            or late cancellation, any penalties will be charged to the card
            provided when the booking was made.
          </p>
        );
      case "How long will the pre-authorization hold affect my available balance?":
        return (
          <p>
            Your card provider can better explain this, along with the general
            terms and conditions associated with their pre-authorization
            procedures. These terms vary across the board, so it's best to
            contact them for specific details.
          </p>
        );
      case "Will the pre-authorisation hold always equal the exact amount of my reservation?":
        return (
          <p>
            In most cases, the hotel will pre-authorize your card for the full
            amount of your reservation. On occasion, you may see an amount
            slightly higher than the rate shown on CC Booking. If this does
            happen, the hotel can explain why this has occurred.
          </p>
        );
      case "Will this happen with all bookings made through CC Booking?":
        return (
          <p>
            Hotels reserve the right to pre-authorize your card, but this
            doesn't mean it will occur with every booking. Don't worry, if your
            card is pre-authorized, both the hotel and your credit card company
            are there to help. They may also be able to assist you with removing
            these holds sooner.
          </p>
        );
      case "The credit card that I used to make a reservation is no longer valid. What should I do?":
        return (
          <p>
            Update your payment details on CC Booking. If your booking
            confirmation says the property will handle payment, you can contact
            the property directly. You'll find their contact info in your
            booking confirmation email or when you log in to CC Booking. For
            security reasons, never provide your credit card details by email.
          </p>
        );
      case "Why was I charged?":
        return (
          <p>
            The charge you see could be any one of the following:
            pre-authorization, deposit or prepayment.
          </p>
        );
      case "What is a pre-authorization?":
        return (
          <p>
            When you make a reservation, there may be instances where the hotel
            will contact your credit (or debit) card company to confirm that the
            card you are using is valid and hasn't been reported lost or stolen.
            At this time, they may also check to see if the card has enough
            money to cover the transaction. This is communicated in the form of
            a pre-authorization for the full amount of your reservation.
          </p>
        );
      case "Which credit cards can I use to complete my booking?":
        return (
          <p>
            To make a reservation via CC Booking all hotels accept: Mastercard
            or Visa.
          </p>
        );
      case "Are my credit card details safe?":
        return (
          <p>
            Yes, always. CC Booking uses a secure connection for your booking
            and personal data, and credit card details are encrypted.
          </p>
        );
      case "I want to check out after the stated check-out time. What should I do?":
        return (
          <p>
            You can ask the property about arranging a late check-out when you
            get there. It will depend on what's available at the time of your
            stay.
          </p>
        );
      case "What are the check-in and check-out times of a property?":
        return (
          <p>
            Check-in and check-out times differ for each property. You can find
            them in the "House Rules" section on the property page when you make
            a booking. If you already made a booking, you can see check-in and
            check-out times in your confirmation email and when you log in to
            your account.
          </p>
        );
      case "How do I get more info about the facilities available?":
        return (
          <p>
            You can check which facilities are included with a booking when
            comparing different options offered by a particular property. To see
            which facilities are available at the property itself, go to
            "Facilities" at the top of the property page.
          </p>
        );
      case "I want a smoking room however I can only choose a non-smoking room. How can I request a smoking room?":
        return (
          <p>
            If there are no rooms listed as "smoking rooms," it means that the
            hotel does not allow smoking in rooms.
          </p>
        );
      case "How do I find out if properties allow pets?":
        return (
          <p>
            Pet policies are always displayed on the property's page under
            "House rules."
          </p>
        );
      case "I will be arriving earlier/later than the stated check-in time. Can I still check in?":
        return (
          <p>
            It's important to remember that the property can't always
            accommodate these requests. They'll be happy to let you into your
            room early if possible, but there might not be anyone there in
            person to welcome you if you arrive late at night at a remote
            apartment. It's always best to check with the property directly and
            in advance to avoid confusion.
          </p>
        );
      case "How do I know if parking is available at the property and how can I reserve it?":
        return (
          <p>
            You can see if the property has parking under "Facilities" before
            making a booking. If the property requires you to reserve a space,
            contact them directly with the contact details provided in your
            booking confirmation.
          </p>
        );
      case "How do I find out if a property has a certain facility (e.g. an elevator)?":
        return (
          <p>
            Under "Facilities" on the property page, you can see a list of all
            the property's facilities, activities, and services.
          </p>
        );
      case "How do I know if the property offers a shuttle service and how can I book it?":
        return (
          <p>
            If the property offers a shuttle service it will be listed under
            "Facilities". After you make a booking, you can arrange the airport
            transfer directly with the property. You can find their contact info
            in your booking confirmation. Remember to have your flight details
            ready because they'll need these to make sure the driver can find
            you at the airport.
          </p>
        );
      case "Can the property store my luggage before check-in or after check-out?":
        return (
          <p>
            If the property has luggage storage, you'll see it displayed on the
            property page under "Facilities." For more info about luggage
            storage, contact the property directly using the details provided in
            your booking confirmation.
          </p>
        );
      case "What is social engineering?":
        return (
          <p>
            Social engineering is a tactic that scammers use. They pretend to be
            a trusted source to trick people into giving them sensitive personal
            data. Online scammers usually pose as well-known companies, then use
            a seemingly logical reason to ask for your personal data and
            payments.
          </p>
        );
      case "How can I prevent social engineering attempts?":
        return (
          <p>
            Remember: CC Booking will never ask you to enter your credit card or
            gift card number via email, text, or phone.
          </p>
        );
      case "I was recently asked to pay using my gift card over the phone. Is that okay?":
        return (
          <p>
            CC Booking will never ask you to share a credit card or a gift card
            number over the phone. If anyone tells you to pay by gift card or
            share a credit card over the phone—for any reason—it's likely to be
            a scam.
          </p>
        );
      case "I think I've been scammed. What should I do?":
        return (
          <p>
            If you believe you were exposed to an online scam involving CC
            Booking, contact us as soon as possible. We're here to help 24/7, so
            go to CC Booking/help or access the Help Center via the app's main
            menu.
          </p>
        );
      case "How do I change or cancel my booking in this situation?":
        return (
          <p>
            If your booking is no longer free to cancel or non-refundable, you
            may incur a cancellation fee. You can contact the property to see if
            it's possible to change the dates of your booking or cancel it.
          </p>
        );
      case "What is the policy for date changes or cancellations related to coronavirus?":
        return (
          <p>
            For bookings made on or after April 6, 2020: Your
            change/cancellation request will be handled by the property. The
            policy you chose and mandatory consumer laws, where applicable, are
            relevant.
          </p>
        );
      case "Where can I get the latest info for my booking?":
        return (
          <p>
            The situation keeps evolving every day. Select your booking in the
            help center to find relevant info. Due to the current circumstances,
            it may take us longer than usual to respond to your questions and
            requests. Thanks for your patience.
          </p>
        );
      default:
        return "The answer for this question is not available now...";
    }
  };

  return (
    <div className="main-contact-page">
      <div>
        <br></br>
        <h3>Welcome to the Help Center!</h3>
        <p>We are at your disposal 24/7</p>
        <br></br>
        <br></br>
        <h4>Frequently Asked Questions</h4>
        <br></br>
        <Tabs
          defaultActiveKey="accommodations"
          id="justify-tab-example"
          className="mb-4"
          justify
        >
          <Tab
            eventKey="accommodations"
            title={
              <span>
                <FaHome /> Accommodations{" "}
              </span>
            }
          >
            <Tab.Container id="left-tabs-example" defaultActiveKey="1.1">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="1.1">Cancellations</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="1.2">Payment</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="1.3">Booking Details</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="1.4">Communications</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="1.5">Room Types</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="1.6">Pricing</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="1.7">Credit Cards</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="1.8">Property Policies</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="1.9">Extra Facilites</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="1.10">
                        Security and awareness
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="1.11">
                        Coronavirus-related support
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="1.1">
                      <ListGroup variant="flush">
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick("Can I cancel my booking?")
                          }
                        >
                          Can I cancel my booking?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "If I need to cancel my booking, will I pay a fee?"
                            )
                          }
                        >
                          If I need to cancel my booking, will I pay a fee?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Can I cancel or change my dates for a non -refundable booking?"
                            )
                          }
                        >
                          Can I cancel or change my dates for a non -refundable
                          booking?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "How do I know if my booking was canceled?"
                            )
                          }
                        >
                          How do I know if my booking was canceled?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Where can I find my property's cancellation policy?"
                            )
                          }
                        >
                          Where can I find my property's cancellation policy?
                        </ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item>
                          <h3>More help!</h3>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick("Get help with a booking")
                            }
                          >
                            Get help with a booking
                          </ListGroup.Item>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick(
                                "I need help with something else"
                              )
                            }
                          >
                            I need help with something else
                          </ListGroup.Item>
                        </ListGroup.Item>
                      </ListGroup>
                    </Tab.Pane>
                    <Tab.Pane eventKey="1.2">
                      <ListGroup variant="flush">
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "What payment methods are accepted?"
                            )
                          }
                        >
                          What payment methods are accepted?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Can I pay with a deposit, or prepayment?"
                            )
                          }
                        >
                          Can I pay with a deposit, or prepayment?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "I was charged. Do I need to do anything?"
                            )
                          }
                        >
                          I was charged. Do I need to do anything?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Where can I see the payment policy for my booking?"
                            )
                          }
                        >
                          Where can I see the payment policy for my booking?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Why do I need to provide my card details?"
                            )
                          }
                        >
                          Why do I need to provide my card details?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Can I pay for my stay with a different credit card than the one used to book?"
                            )
                          }
                        >
                          Can i pay for my stay with a different credit card
                          than the one used to book?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Why do I need to provide my credit card details?"
                            )
                          }
                        >
                          Why do I need to provide my credit card details?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Who's going to charge my credit card and when?"
                            )
                          }
                        >
                          Who's going to charge my credit card and when?
                        </ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item>
                          <h3>More help!</h3>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick("Get help with a booking")
                            }
                          >
                            Get help with a booking
                          </ListGroup.Item>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick(
                                "I need help with something else"
                              )
                            }
                          >
                            I need help with something else
                          </ListGroup.Item>
                        </ListGroup.Item>
                      </ListGroup>
                    </Tab.Pane>
                    <Tab.Pane eventKey="1.3">
                      <ListGroup variant="flush">
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "How do I get more info about the room or property's facilities?"
                            )
                          }
                        >
                          How do I get more info about the room or property's
                          facilities?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Is it possible to get an extra bed or crib for a child?"
                            )
                          }
                        >
                          Is it possible to get an extra bed or crib for a
                          child?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick("How can I get an invoice?")
                          }
                        >
                          How can I get an invoice?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "I can't find my confirmation email. What should I do?"
                            )
                          }
                        >
                          I can't find my confirmation email. What should I do?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Will I pay the full price for my children?"
                            )
                          }
                        >
                          Will I pay the full price for my children?
                        </ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item>
                          <h3>More help!</h3>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick("Get help with a booking")
                            }
                          >
                            Get help with a booking
                          </ListGroup.Item>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick(
                                "I need help with something else"
                              )
                            }
                          >
                            I need help with something else
                          </ListGroup.Item>
                        </ListGroup.Item>
                      </ListGroup>
                    </Tab.Pane>
                    <Tab.Pane eventKey="1.4">
                      <ListGroup variant="flush">
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Why does the property's email address end with @property.CC Booking?"
                            )
                          }
                        >
                          Why does the property's email address end with
                          @property.CC Booking?
                        </ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item>
                          <h3>More help!</h3>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick("Get help with a booking")
                            }
                          >
                            Get help with a booking
                          </ListGroup.Item>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick(
                                "I need help with something else"
                              )
                            }
                          >
                            I need help with something else
                          </ListGroup.Item>
                        </ListGroup.Item>
                      </ListGroup>
                    </Tab.Pane>
                    <Tab.Pane eventKey="1.5">
                      <ListGroup variant="flush">
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "What is the difference between a Double Room and a Twin Room?"
                            )
                          }
                        >
                          What is the difference between a Double Room and a
                          Twin Room?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "What do 'non-refundable' and 'free cancellation' mean?"
                            )
                          }
                        >
                          What do 'non-refundable' and 'free cancellation' mean?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Can I request an extra bed in my room and will there be an extra charge?"
                            )
                          }
                        >
                          Can I request an extra bed in my room and will there
                          be an extra charge?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Is it possible to get an extra bed or crib for a child?"
                            )
                          }
                        >
                          Is it possible to get an extra bed or crib for a
                          child?
                        </ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item>
                          <h3>More help!</h3>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick("Get help with a booking")
                            }
                          >
                            Get help with a booking
                          </ListGroup.Item>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick(
                                "I need help with something else"
                              )
                            }
                          >
                            I need help with something else
                          </ListGroup.Item>
                        </ListGroup.Item>
                      </ListGroup>
                    </Tab.Pane>
                    <Tab.Pane eventKey="1.6">
                      <ListGroup variant="flush">
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Is breakfast included in the price?"
                            )
                          }
                        >
                          Is breakfast included in the price?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick("What does the price include?")
                          }
                        >
                          What does the price include?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Are the prices shown on CC Booking per person or per room?"
                            )
                          }
                        >
                          Are the prices shown on CC Booking per person or per
                          room?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Are taxes included in the price?"
                            )
                          }
                        >
                          Are taxes included in the price?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Do I pay a reservation fee to CC Booking?"
                            )
                          }
                        >
                          Do I pay a reservation fee to CC Booking?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "What does the crossed out rate mean next to my room type?"
                            )
                          }
                        >
                          What does the crossed out rate mean next to my room
                          type?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Can I use discount coupons (e.g. issued by magazines, stores, etc. )?"
                            )
                          }
                        >
                          Can I use discount coupons (e.g. issued by magazines,
                          stores, etc. )?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Does CC Booking offer any special consideration discounts, or discounts with airline or hotel loyalty cards?"
                            )
                          }
                        >
                          Does CC Booking offer any special consideration
                          discounts, or discounts with airline or hotel loyalty
                          cards?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Do I pay the full price for my child?"
                            )
                          }
                        >
                          Do I pay the full price for my child?
                        </ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item>
                          <h3>More help!</h3>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick("Get help with a booking")
                            }
                          >
                            Get help with a booking
                          </ListGroup.Item>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick(
                                "I need help with something else"
                              )
                            }
                          >
                            I need help with something else
                          </ListGroup.Item>
                        </ListGroup.Item>
                      </ListGroup>
                    </Tab.Pane>
                    <Tab.Pane eventKey="1.7">
                      <ListGroup variant="flush">
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Can I use a debit card to complete my reservation?"
                            )
                          }
                        >
                          Can I use a debit card to complete my reservation?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Can I make a reservation without a credit card?"
                            )
                          }
                        >
                          Can I make a reservation without a credit card?{" "}
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "What's the difference between a pre-authorization and an actual charge to my credit card?"
                            )
                          }
                        >
                          What's the difference between a pre-authorization and
                          an actual charge to my credit card?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "How will I know if my card has been pre-authorized?"
                            )
                          }
                        >
                          How will I know if my card has been pre-authorized?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Can I make a reservation for myself using someone else's credit card?"
                            )
                          }
                        >
                          Can I make a reservation for myself using someone
                          else's credit card?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "How long will the pre-authorization hold affect my available balance?"
                            )
                          }
                        >
                          How long will the pre-authorization hold affect my
                          available balance?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Why do I need to provide my credit card details?"
                            )
                          }
                        >
                          Why do I need to provide my credit card details?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Will the pre-authorisation hold always equal the exact amount of my reservation?"
                            )
                          }
                        >
                          Will the pre-authorisation hold always equal the exact
                          amount of my reservation?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Will this happen with all bookings made through CC Booking?"
                            )
                          }
                        >
                          Will this happen with all bookings made through CC
                          Booking?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "The credit card that I used to make a reservation is no longer valid. What should I do?"
                            )
                          }
                        >
                          The credit card that I used to make a reservation is
                          no longer valid. What should I do?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick("Why was I charged?")
                          }
                        >
                          Why was I charged?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick("What is a pre-authorization?")
                          }
                        >
                          What is a pre-authorization?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Which credit cards can I use to complete my booking?"
                            )
                          }
                        >
                          Which credit cards can I use to complete my booking?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Are my credit card details safe?"
                            )
                          }
                        >
                          Are my credit card details safe?{" "}
                        </ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item>
                          <h3>More help!</h3>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick("Get help with a booking")
                            }
                          >
                            Get help with a booking
                          </ListGroup.Item>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick(
                                "I need help with something else"
                              )
                            }
                          >
                            I need help with something else
                          </ListGroup.Item>
                        </ListGroup.Item>
                      </ListGroup>
                    </Tab.Pane>
                    <Tab.Pane eventKey="1.8">
                      <ListGroup variant="flush">
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "I want to check out after the stated check-out time. What should I do?"
                            )
                          }
                        >
                          I want to check out after the stated check-out time.
                          What should I do?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "What are the check-in and check-out times of a property?"
                            )
                          }
                        >
                          What are the check-in and check-out times of a
                          property?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "How do I get more info about the facilities available?"
                            )
                          }
                        >
                          How do I get more info about the facilities available?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "I want a smoking room however I can only choose a non-smoking room. How can I request a smoking room?"
                            )
                          }
                        >
                          I want a smoking room however I can only choose a
                          non-smoking room. How can I request a smoking room?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "How do I find out if properties allow pets?"
                            )
                          }
                        >
                          How do I find out if properties allow pets?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "I will be arriving earlier/later than the stated check-in time. Can I still check in?"
                            )
                          }
                        >
                          I will be arriving earlier/later than the stated
                          check-in time. Can I still check in?
                        </ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item>
                          <h3>More help!</h3>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick("Get help with a booking")
                            }
                          >
                            Get help with a booking
                          </ListGroup.Item>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick(
                                "I need help with something else"
                              )
                            }
                          >
                            I need help with something else
                          </ListGroup.Item>
                        </ListGroup.Item>
                      </ListGroup>
                    </Tab.Pane>
                    <Tab.Pane eventKey="1.9">
                      <ListGroup variant="flush">
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "How do I know if parking is available at the property and how can I reserve it?"
                            )
                          }
                        >
                          How do I know if parking is available at the property
                          and how can I reserve it?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "How do I find out if a property has a certain facility (e.g. an elevator)?"
                            )
                          }
                        >
                          How do I find out if a property has a certain facility
                          (e.g. an elevator)?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "How do I know if the property offers a shuttle service and how can I book it?"
                            )
                          }
                        >
                          How do I know if the property offers a shuttle service
                          and how can I book it?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Can the property store my luggage before check-in or after check-out?"
                            )
                          }
                        >
                          Can the property store my luggage before check-in or
                          after check-out?
                        </ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item>
                          <h3>More help!</h3>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick("Get help with a booking")
                            }
                          >
                            Get help with a booking
                          </ListGroup.Item>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick(
                                "I need help with something else"
                              )
                            }
                          >
                            I need help with something else
                          </ListGroup.Item>
                        </ListGroup.Item>
                      </ListGroup>
                    </Tab.Pane>
                    <Tab.Pane eventKey="1.10">
                      <ListGroup variant="flush">
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick("What is social engineering?")
                          }
                        >
                          What is social engineering?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "How can I prevent social engineering attempts?"
                            )
                          }
                        >
                          How can I prevent social engineering attempts?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "I was recently asked to pay using my gift card over the phone. Is that okay?"
                            )
                          }
                        >
                          I was recently asked to pay using my gift card over
                          the phone. Is that okay?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "I think I've been scammed. What should I do?"
                            )
                          }
                        >
                          I think I've been scammed. What should I do?
                        </ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item>
                          <h3>More help!</h3>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick("Get help with a booking")
                            }
                          >
                            Get help with a booking
                          </ListGroup.Item>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick(
                                "I need help with something else"
                              )
                            }
                          >
                            I need help with something else
                          </ListGroup.Item>
                        </ListGroup.Item>
                      </ListGroup>
                    </Tab.Pane>
                    <Tab.Pane eventKey="1.11">
                      <ListGroup variant="flush">
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Where can I get the latest info for my booking?"
                            )
                          }
                        >
                          Where can I get the latest info for my booking?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "How do I change or cancel my booking in this situation?"
                            )
                          }
                        >
                          How do I change or cancel my booking in this
                          situation?{" "}
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "What is the policy for date changes or cancellations related to coronavirus?"
                            )
                          }
                        >
                          What is the policy for date changes or cancellations
                          related to coronavirus?
                        </ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item>
                          <h3>More help!</h3>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick("Get help with a booking")
                            }
                          >
                            Get help with a booking
                          </ListGroup.Item>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick(
                                "I need help with something else"
                              )
                            }
                          >
                            I need help with something else
                          </ListGroup.Item>
                        </ListGroup.Item>
                      </ListGroup>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Tab>
          <Tab
            eventKey="flights"
            title={
              <span>
                <FaPlane /> Flights
              </span>
            }
          >
            <Tab.Container id="left-tabs-example" defaultActiveKey="2.1">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="2.1">Baggage and Seats</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="2.2">
                        Boarding pass and check-in
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="2.3">Booking a flight</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="2.4">
                        Changes and cancellation
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="2.5">Flight confirmation</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="2.6">My flight booking</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="2.7">Payment</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="2.8">Traveler details</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="2.9">
                        Coronavirus-related support
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="2.1">
                      <ListGroup variant="flush">
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick("How much baggage can I bring?")
                          }
                        >
                          How much baggage can I bring?{" "}
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "What is the maximum size for a carry-on or checked bag?"
                            )
                          }
                        >
                          What is the maximum size for a carry-on or checked
                          bag?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Can I add more bags to my flight?"
                            )
                          }
                        >
                          Can I add more bags to my flight?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Can I add a special or oversized bag?"
                            )
                          }
                        >
                          Can I add a special or oversized bag?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "What can I bring in my carry-on bag?"
                            )
                          }
                        >
                          What can I bring in my carry-on bag?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Can I bring baby food or medicine in my baggage?"
                            )
                          }
                        >
                          Can I bring baby food or medicine in my baggage?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick("Can I take a pet with me?")
                          }
                        >
                          Can I take a pet with me?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Can I select the seats for my flight?"
                            )
                          }
                        >
                          Can I select the seats for my flight?
                        </ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item>
                          <h3>More help!</h3>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick("Get help with a booking")
                            }
                          >
                            Get help with a booking
                          </ListGroup.Item>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick(
                                "I need help with something else"
                              )
                            }
                          >
                            I need help with something else
                          </ListGroup.Item>
                        </ListGroup.Item>
                      </ListGroup>
                    </Tab.Pane>
                    <Tab.Pane eventKey="2.2">
                      <ListGroup variant="flush">
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick("Where is my flight booking?")
                          }
                        >
                          Where is my flight booking?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "When do I add my passport/ID details?"
                            )
                          }
                        >
                          When do I add my passport/ID details?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "How do I check in for my flight?"
                            )
                          }
                        >
                          How do I check in for my flight?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Where can I find my boarding pass?"
                            )
                          }
                        >
                          Where can I find my boarding pass?
                        </ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item>
                          <h3>More help!</h3>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick("Get help with a booking")
                            }
                          >
                            Get help with a booking
                          </ListGroup.Item>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick(
                                "I need help with something else"
                              )
                            }
                          >
                            I need help with something else
                          </ListGroup.Item>
                        </ListGroup.Item>
                      </ListGroup>
                    </Tab.Pane>
                    <Tab.Pane eventKey="2.3">
                      <ListGroup variant="flush">
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "What's a self-transfer flight?"
                            )
                          }
                        >
                          What's a self-transfer flight?{" "}
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Can I book tickets for a child traveling alone?"
                            )
                          }
                        >
                          Can I book tickets for a child traveling alone?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "How do I book for a big group?"
                            )
                          }
                        >
                          How do I book for a big group?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick("What's a flexible ticket?")
                          }
                        >
                          What's a flexible ticket?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick("What are SMS updates?")
                          }
                        >
                          What are SMS updates?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "How should I enter my name in the traveler details?"
                            )
                          }
                        >
                          How should I enter my name in the traveler details?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Can I add my frequent flyer number?"
                            )
                          }
                        >
                          Can I add my frequent flyer number?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() => handleQuestionClick("How do I pay?")}
                        >
                          How do I pay?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick("Can I pay in installments?")
                          }
                        >
                          Can I pay in installments?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Do you charge credit card fees?"
                            )
                          }
                        >
                          Do you charge credit card fees?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "How does CC Booking calculate a flight's estimated carbon emissions?"
                            )
                          }
                        >
                          How does CC Booking calculate a flight's estimated
                          carbon emissions?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "What is Cancel for Any Reason?"
                            )
                          }
                        >
                          What is Cancel for Any Reason?
                        </ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item>
                          <h3>More help!</h3>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick("Get help with a booking")
                            }
                          >
                            Get help with a booking
                          </ListGroup.Item>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick(
                                "I need help with something else"
                              )
                            }
                          >
                            I need help with something else
                          </ListGroup.Item>
                        </ListGroup.Item>
                      </ListGroup>
                    </Tab.Pane>
                    <Tab.Pane eventKey="2.4">
                      <ListGroup variant="flush">
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Can I change the name on my ticket?"
                            )
                          }
                        >
                          Can I change the name on my ticket?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Why can't I see the changes I made in the flight booking details?"
                            )
                          }
                        >
                          Why can't I see the changes I made in the flight
                          booking details?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "What does the refund process look like?"
                            )
                          }
                        >
                          What does the refund process look like?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "How long is the refund process?"
                            )
                          }
                        >
                          How long is the refund process?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "I received a voucher/open ticket. How does it work?"
                            )
                          }
                        >
                          I received a voucher/open ticket. How does it work?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "How do I change my flight with a flexible ticket?"
                            )
                          }
                        >
                          How do I change my flight with a flexible ticket?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Can I add an infant to my booking?"
                            )
                          }
                        >
                          Can I add an infant to my booking?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick("Can I cancel my flight?")
                          }
                        >
                          Can I cancel my flight?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Do I get a refund if my flight is canceled?"
                            )
                          }
                        >
                          Do I get a refund if my flight is canceled?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "How do I cancel my flight with Cancel for Any Reason?"
                            )
                          }
                        >
                          How do I cancel my flight with Cancel for Any Reason?
                        </ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item>
                          <h3>More help!</h3>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick("Get help with a booking")
                            }
                          >
                            Get help with a booking
                          </ListGroup.Item>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick(
                                "I need help with something else"
                              )
                            }
                          >
                            I need help with something else
                          </ListGroup.Item>
                        </ListGroup.Item>
                      </ListGroup>
                    </Tab.Pane>
                    <Tab.Pane eventKey="2.5">
                      <ListGroup variant="flush">
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "I can't find my confirmation email. What should I do?"
                            )
                          }
                        >
                          I can't find my confirmation email. What should I do?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Where can I find my flight ticket?"
                            )
                          }
                        >
                          Where can I find my flight ticket?
                        </ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item>
                          <h3>More help!</h3>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick("Get help with a booking")
                            }
                          >
                            Get help with a booking
                          </ListGroup.Item>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick(
                                "I need help with something else"
                              )
                            }
                          >
                            I need help with something else
                          </ListGroup.Item>
                        </ListGroup.Item>
                      </ListGroup>
                    </Tab.Pane>
                    <Tab.Pane eventKey="2.6">
                      <ListGroup variant="flush">
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Is my booking ATOL protected (UK Customers Only)?"
                            )
                          }
                        >
                          Is my booking ATOL protected (UK Customers Only)?{" "}
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Will my layover give me enough to get to the next flight?"
                            )
                          }
                        >
                          Will my layover give me enough to get to the next
                          flight?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "How do I know if my flight is on time?"
                            )
                          }
                        >
                          How do I know if my flight is on time?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Why did my flight time change?"
                            )
                          }
                        >
                          Why did my flight time change?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "How do I make a travel insurance claim?"
                            )
                          }
                        >
                          How do I make a travel insurance claim?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Why is Ryanair asking me to verify my identity?"
                            )
                          }
                        >
                          Why is Ryanair asking me to verify my identity?
                        </ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item>
                          <h3>More help!</h3>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick("Get help with a booking")
                            }
                          >
                            Get help with a booking
                          </ListGroup.Item>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick(
                                "I need help with something else"
                              )
                            }
                          >
                            I need help with something else
                          </ListGroup.Item>
                        </ListGroup.Item>
                      </ListGroup>
                    </Tab.Pane>
                    <Tab.Pane eventKey="2.7">
                      <ListGroup variant="flush">
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick("Can I get an invoice?")
                          }
                        >
                          Can I get an invoice?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick("Can I pay in installments?")
                          }
                        >
                          Can I pay in installments?
                        </ListGroup.Item>{" "}
                        <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item>
                          <h3>More help!</h3>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick("Get help with a booking")
                            }
                          >
                            Get help with a booking
                          </ListGroup.Item>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick(
                                "I need help with something else"
                              )
                            }
                          >
                            I need help with something else
                          </ListGroup.Item>
                        </ListGroup.Item>
                      </ListGroup>
                    </Tab.Pane>
                    <Tab.Pane eventKey="2.8">
                      <ListGroup variant="flush">
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "How do I make a booking for an infant?"
                            )
                          }
                        >
                          How do I make a booking for an infant?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "I misspelled a traveler's name. Can I correct it?"
                            )
                          }
                        >
                          I misspelled a traveler's name. Can I correct it?
                        </ListGroup.Item>{" "}
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "How can I request special assistance?"
                            )
                          }
                        >
                          How can I request special assistance?
                        </ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item>
                          <h3>More help!</h3>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick("Get help with a booking")
                            }
                          >
                            Get help with a booking
                          </ListGroup.Item>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick(
                                "I need help with something else"
                              )
                            }
                          >
                            I need help with something else
                          </ListGroup.Item>
                        </ListGroup.Item>
                      </ListGroup>
                    </Tab.Pane>
                    <Tab.Pane eventKey="2.9">
                      <ListGroup variant="flush">
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick("Will I get a refund?")
                          }
                        >
                          Will I get a refund?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick("How long will my refund take?")
                          }
                        >
                          How long will my refund take?{" "}
                        </ListGroup.Item>{" "}
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "How will you keep me informed about updates?"
                            )
                          }
                        >
                          How will you keep me informed about updates?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Where can I cancel or change my tickets?"
                            )
                          }
                        >
                          Where can I cancel or change my tickets?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Can you help me claim a refund from the airline I was going to fly with?"
                            )
                          }
                        >
                          Can you help me claim a refund from the airline I was
                          going to fly with?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Do I need a health certificate to travel?"
                            )
                          }
                        >
                          Do I need a health certificate to travel?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Where can I see the restrictions each country has enabled due to the coronavirus?"
                            )
                          }
                        >
                          Where can I see the restrictions each country has
                          enabled due to the coronavirus?
                        </ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item>
                          <h3>More help!</h3>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick("Get help with a booking")
                            }
                          >
                            Get help with a booking
                          </ListGroup.Item>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick(
                                "I need help with something else"
                              )
                            }
                          >
                            I need help with something else
                          </ListGroup.Item>
                        </ListGroup.Item>
                      </ListGroup>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Tab>
          <Tab
            eventKey="insurance"
            title={
              <span>
                <FaShieldAlt /> Insurance
              </span>
            }
          >
            <Tab.Container id="left-tabs-example" defaultActiveKey="3.1">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="3.1">
                        Room Cancellation Insurance - Claims
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="3.2">
                        Room Cancellation Insurance - Coverage
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="3.3">
                        Room Cancellation Insurance - Policy terms
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="3.4">
                        Room Cancellation Insurance - General
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="3.5">
                        Travel Insurance - Claims
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="3.6">
                        Travel Insurance - Coverage
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="3.7">
                        Travel Insurance - Policy terms
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="3.8">
                        Travel Insurance - General
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="3.1">
                      <ListGroup variant="flush">
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "I have contracted COVID-19. Do I need a positive PCR result to file a claim or is a doctor's certificate sufficient?"
                            )
                          }
                        >
                          I have contracted COVID-19. Do I need a positive PCR
                          result to file a claim or is a doctor's certificate
                          sufficient?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Is repatriation after an accident during the trip insured?"
                            )
                          }
                        >
                          Is repatriation after an accident during the trip
                          insured?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "If I have a successful claim, how will the payment be made?"
                            )
                          }
                        >
                          If I have a successful claim, how will the payment be
                          made?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Which documents are needed to support a claim?"
                            )
                          }
                        >
                          Which documents are needed to support a claim?
                        </ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item>
                          <h3>More help!</h3>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick("Get help with a booking")
                            }
                          >
                            Get help with a booking
                          </ListGroup.Item>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick(
                                "I need help with something else"
                              )
                            }
                          >
                            I need help with something else
                          </ListGroup.Item>
                        </ListGroup.Item>
                      </ListGroup>
                    </Tab.Pane>
                    <Tab.Pane eventKey="3.2">
                      <ListGroup variant="flush">
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Can I take out an insurance policy that covers all travel arrangements within the next 12 months?"
                            )
                          }
                        >
                          Can I take out an insurance policy that covers all
                          travel arrangements within the next 12 months?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick("Is there an excess?")
                          }
                        >
                          Is there an excess?
                        </ListGroup.Item>{" "}
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "What does Room Cancellation Insurance cover?"
                            )
                          }
                        >
                          What does Room Cancellation Insurance cover?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick("Are there any exclusions?")
                          }
                        >
                          Are there any exclusions?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick("Who is insured on the policy?")
                          }
                        >
                          Who is insured on the policy?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Is cover available if the authorities in my home country advise against entering my destination?"
                            )
                          }
                        >
                          Is cover available if the authorities in my home
                          country advise against entering my destination?
                        </ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item>
                          <h3>More help!</h3>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick("Get help with a booking")
                            }
                          >
                            Get help with a booking
                          </ListGroup.Item>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick(
                                "I need help with something else"
                              )
                            }
                          >
                            I need help with something else
                          </ListGroup.Item>
                        </ListGroup.Item>
                      </ListGroup>
                    </Tab.Pane>
                    <Tab.Pane eventKey="3.3">
                      <ListGroup variant="flush">
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "When does the insurance start and end?"
                            )
                          }
                        >
                          When does the insurance start and end?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "If another person is added to the booking, what do I have to do to include this person in the insurance?"
                            )
                          }
                        >
                          If another person is added to the booking, what do I
                          have to do to include this person in the insurance?
                        </ListGroup.Item>{" "}
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "What do I have to do if I move the date of the booking?"
                            )
                          }
                        >
                          What do I have to do if I move the date of the
                          booking?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Do I have to cancel the insurance contract after completing the trip?"
                            )
                          }
                        >
                          Do I have to cancel the insurance contract after
                          completing the trip?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick("When is the premium due?")
                          }
                        >
                          When is the premium due?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Do I have to take out separate insurance again for my next trip?"
                            )
                          }
                        >
                          Do I have to take out separate insurance again for my
                          next trip?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "What should I do if I cannot make the journey because scheduled flight has been cancelled?"
                            )
                          }
                        >
                          What should I do if I cannot make the journey because
                          the scheduled flight has been cancelled?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "My car broke down or my train was at a standstill for 2 hours, which is why I missed my flight and could not make the journey. Is this insured?"
                            )
                          }
                        >
                          My car broke down or my train was at a standstill for
                          2 hours, which is why I missed my flight and could not
                          make the journey. Is this insured?
                        </ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item>
                          <h3>More help!</h3>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick("Get help with a booking")
                            }
                          >
                            Get help with a booking
                          </ListGroup.Item>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick(
                                "I need help with something else"
                              )
                            }
                          >
                            I need help with something else
                          </ListGroup.Item>
                        </ListGroup.Item>
                      </ListGroup>
                    </Tab.Pane>
                    <Tab.Pane eventKey="3.4">
                      <ListGroup variant="flush">
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick("Who is the insurer?")
                          }
                        >
                          Who is the insurer?{" "}
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "How much does the insurance cost?"
                            )
                          }
                        >
                          How much does the insurance cost?
                        </ListGroup.Item>{" "}
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Can I get a refund if I cancel my policy?"
                            )
                          }
                        >
                          Can I get a refund if I cancel my policy?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Can the insurer terminate the contract?"
                            )
                          }
                        >
                          Can the insurer terminate the contract?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "How does Zurich handle customer data?"
                            )
                          }
                        >
                          How does Zurich handle customer data?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "I would like to report a complaint. How can I do this?"
                            )
                          }
                        >
                          I would like to report a complaint. How can I do this?
                        </ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item>
                          <h3>More help!</h3>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick("Get help with a booking")
                            }
                          >
                            Get help with a booking
                          </ListGroup.Item>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick(
                                "I need help with something else"
                              )
                            }
                          >
                            I need help with something else
                          </ListGroup.Item>
                        </ListGroup.Item>
                      </ListGroup>
                    </Tab.Pane>
                    <Tab.Pane eventKey="3.5">
                      <ListGroup variant="flush">
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick("How do I make a claim?")
                          }
                        >
                          How do I make a claim?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "If I already have travel insurance and buy this insurance through CC Booking as well, which insurance should I claim on?"
                            )
                          }
                        >
                          If I already have travel insurance and buy this
                          insurance through CC Booking as well, which insurance
                          should I claim on?
                        </ListGroup.Item>{" "}
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "I have contracted Covid-19. What proof do I need to submit a trip cancellation claim?"
                            )
                          }
                        >
                          I have contracted Covid-19. What proof do I need to
                          submit a trip cancellation claim?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "My trip has started and I have to cut it short. Is the cost of the rest of the trip covered?"
                            )
                          }
                        >
                          My trip has started and I have to cut it short. Is the
                          cost of the rest of the trip covered?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "What do I need to do in the event of a medical emergency?"
                            )
                          }
                        >
                          What do I need to do in the event of a medical
                          emergency?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "My personal possessions were lost, stolen, or damaged. What should I do?"
                            )
                          }
                        >
                          My personal possessions were lost, stolen, or damaged.
                          What should I do?
                        </ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item>
                          <h3>More help!</h3>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick("Get help with a booking")
                            }
                          >
                            Get help with a booking
                          </ListGroup.Item>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick(
                                "I need help with something else"
                              )
                            }
                          >
                            I need help with something else
                          </ListGroup.Item>
                        </ListGroup.Item>
                      </ListGroup>
                    </Tab.Pane>
                    <Tab.Pane eventKey="3.6">
                      <ListGroup variant="flush">
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Does this policy have an excess?"
                            )
                          }
                        >
                          Does this policy have an excess?{" "}
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "What does Travel Insurance cover?"
                            )
                          }
                        >
                          What does Travel Insurance cover?
                        </ListGroup.Item>{" "}
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick("Where am I covered?")
                          }
                        >
                          Where am I covered?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick("Are there any exclusions?")
                          }
                        >
                          Are there any exclusions?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick("Is Covid-19 covered?")
                          }
                        >
                          Is Covid-19 covered?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick("Who does the insurance cover?")
                          }
                        >
                          Who does the insurance cover?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Is cover available if the authorities advise against visiting my destination?"
                            )
                          }
                        >
                          Is cover available if the authorities advise against
                          visiting my destination?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Are pre-existing medical conditions covered?"
                            )
                          }
                        >
                          Are pre-existing medical conditions covered?
                        </ListGroup.Item>{" "}
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick("Are winter sports covered?")
                          }
                        >
                          Are winter sports covered?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Are there any age limits for the policy?"
                            )
                          }
                        >
                          Are there any age limits for the policy?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Where can I find the cover limits?"
                            )
                          }
                        >
                          Where can I find the cover limits?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Am I covered for stolen or damaged personal possessions?"
                            )
                          }
                        >
                          Am I covered for stolen or damaged personal
                          possessions?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Am I covered for medical emergencies during my trip?"
                            )
                          }
                        >
                          Am I covered for medical emergencies during my trip?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Am I covered if I need to cancel my trip?"
                            )
                          }
                        >
                          Am I covered if I need to cancel my trip?
                        </ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item>
                          <h3>More help!</h3>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick("Get help with a booking")
                            }
                          >
                            Get help with a booking
                          </ListGroup.Item>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick(
                                "I need help with something else"
                              )
                            }
                          >
                            I need help with something else
                          </ListGroup.Item>
                        </ListGroup.Item>
                      </ListGroup>
                    </Tab.Pane>
                    <Tab.Pane eventKey="3.7">
                      <ListGroup variant="flush">
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "When does the insurance start and end?"
                            )
                          }
                        >
                          When does the insurance start and end?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "I haven't received my insurance documents. Where can I find them?"
                            )
                          }
                        >
                          I haven't received my insurance documents. Where can I
                          find them?
                        </ListGroup.Item>{" "}
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "My trip includes one or more bookings that I didn't make with CC Booking. Am I covered?"
                            )
                          }
                        >
                          My trip includes one or more bookings that I didn't
                          make with CC Booking. Am I covered?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick("Can I change my insurance?")
                          }
                        >
                          Can I change my insurance?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Once I've bought the insurance, can I change who's insured or insure additional travelers?"
                            )
                          }
                        >
                          Once I've bought the insurance, can I change who's
                          insured or insure additional travelers?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "If I change my trip dates, am I still covered?"
                            )
                          }
                        >
                          If I change my trip dates, am I still covered?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "If I change my destination, am I still covered?"
                            )
                          }
                        >
                          If I change my destination, am I still covered?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "If I change my trip, am I still covered?"
                            )
                          }
                        >
                          If I change my trip, am I still covered?
                        </ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item>
                          <h3>More help!</h3>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick("Get help with a booking")
                            }
                          >
                            Get help with a booking
                          </ListGroup.Item>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick(
                                "I need help with something else"
                              )
                            }
                          >
                            I need help with something else
                          </ListGroup.Item>
                        </ListGroup.Item>
                      </ListGroup>
                    </Tab.Pane>
                    <Tab.Pane eventKey="3.8">
                      <ListGroup variant="flush">
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick("Can I cancel my policy?")
                          }
                        >
                          Can I cancel my policy?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "How can I complain about the insurance?"
                            )
                          }
                        >
                          How can I complain about the insurance?
                        </ListGroup.Item>{" "}
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Where can I find my insurance documents?"
                            )
                          }
                        >
                          Where can I find my insurance documents?
                        </ListGroup.Item>
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick(
                              "Can I get a refund if I cancel my policy?"
                            )
                          }
                        >
                          Can I get a refund if I cancel my policy?
                        </ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item>
                          <h3>More help!</h3>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick("Get help with a booking")
                            }
                          >
                            Get help with a booking
                          </ListGroup.Item>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick(
                                "I need help with something else"
                              )
                            }
                          >
                            I need help with something else
                          </ListGroup.Item>
                        </ListGroup.Item>
                      </ListGroup>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Tab>
          <Tab
            eventKey="other"
            title={
              <span>
                <FaEllipsisH /> Other
              </span>
            }
          >
            <Tab.Container id="left-tabs-example" defaultActiveKey="4.1">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="4.1">
                        How can I contact CC Booking?
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="4.1">
                      <ListGroup variant="flush">
                        <ListGroup.Item
                          action
                          onClick={() =>
                            handleQuestionClick("How can I contact CC Booking?")
                          }
                        >
                          How can I contact CC Booking?
                        </ListGroup.Item>
                        <ListGroup.Item></ListGroup.Item>
                        <ListGroup.Item>
                          <h3>More help!</h3>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick("Get help with a booking")
                            }
                          >
                            Get help with a booking
                          </ListGroup.Item>
                          <ListGroup.Item
                            action
                            onClick={() =>
                              handleQuestionClick(
                                "I need help with something else"
                              )
                            }
                          >
                            I need help with something else
                          </ListGroup.Item>
                        </ListGroup.Item>
                      </ListGroup>
                    </Tab.Pane>{" "}
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Tab>
        </Tabs>
        <br></br>
      </div>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showModal}
        onHide={handleCloseModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>{getQuestion()}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {getAnswerForQuestion(selectedQuestion)}
          <p>
            Was this information helpful?<br></br>
            {<BsHandThumbsUp />}
            {<BsHandThumbsDown />}
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Contact;
