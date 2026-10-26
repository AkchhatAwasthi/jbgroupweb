"use client";

import React, { useState } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Calendar,
  Users,
  Building,
  MessageSquare,
  Phone,
  Mail,
  User,
  Sparkles,
} from "lucide-react";

interface EnquiryFormProps {
  initialType?: "room" | "banquet" | "general";
  defaultBusiness?: "skyhilton" | "urban-sweets" | "innovation" | "all";
  defaultVenue?: string;
  defaultRoomCategory?: string;
  title?: string;
  subtitle?: string;
}

export default function EnquiryForm({
  initialType = "banquet",
  defaultBusiness = "all",
  defaultVenue = "",
  defaultRoomCategory = "",
  title,
  subtitle,
}: EnquiryFormProps) {
  const [formType, setFormType] = useState<"room" | "banquet" | "general">(initialType);

  // Form Fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [businessOrVenue, setBusinessOrVenue] = useState(
    defaultVenue || (defaultBusiness !== "all" ? defaultBusiness : "")
  );

  // Room Specific Fields
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [roomCategory, setRoomCategory] = useState(defaultRoomCategory || "Deluxe Room");
  const [guestCount, setGuestCount] = useState("2");
  const [roomRequests, setRoomRequests] = useState("");

  // Banquet Specific Fields
  const [eventType, setEventType] = useState("Wedding / Reception");
  const [preferredDate, setPreferredDate] = useState("");
  const [paxCount, setPaxCount] = useState("100");
  const [eventRequirements, setEventRequirements] = useState("");

  // General Message
  const [generalMessage, setGeneralMessage] = useState("");

  // Status handling
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [successResult, setSuccessResult] = useState<{
    referenceId: string;
    message: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors([]);

    // Client-side validations
    const validationErrors: string[] = [];
    if (!name.trim()) validationErrors.push("Please provide your full name.");
    if (!phone.trim() || phone.trim().length < 8)
      validationErrors.push("Please enter a valid telephone contact number.");
    if (!email.trim() || !email.includes("@"))
      validationErrors.push("Please enter a valid email address.");

    if (formType === "room") {
      if (!checkIn) validationErrors.push("Please specify a check-in date.");
      if (!checkOut) validationErrors.push("Please specify a check-out date.");
    } else if (formType === "banquet") {
      if (!preferredDate) validationErrors.push("Please specify your preferred event date.");
      if (!businessOrVenue) validationErrors.push("Please select your preferred venue or business.");
    } else if (formType === "general") {
      if (!generalMessage.trim()) validationErrors.push("Please enter your message details.");
    }

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const payload: Record<string, unknown> = {
        type: formType,
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
      };

      if (formType === "room") {
        payload.checkIn = checkIn;
        payload.checkOut = checkOut;
        payload.roomCategory = roomCategory;
        payload.guestCount = guestCount;
        payload.additionalRequests = roomRequests;
        payload.property = businessOrVenue || "JB Skyhilton";
      } else if (formType === "banquet") {
        payload.eventType = eventType;
        payload.preferredDate = preferredDate;
        payload.approximateGuestCount = paxCount;
        payload.venueOrBusiness = businessOrVenue;
        payload.additionalRequirements = eventRequirements;
      } else {
        payload.businessOfInterest = businessOrVenue || "JB Group Corporate";
        payload.message = generalMessage;
      }

      const res = await fetch("/api/enquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setErrors(data.errors || ["Unable to submit enquiry. Please check your details."]);
      } else {
        setSuccessResult({
          referenceId: data.referenceId,
          message: data.message,
        });
      }
    } catch (err) {
      console.error(err);
      setErrors(["Network error. Please try again or reach our team via phone."]);
    } finally {
      setIsSubmitting(false);
    }
  };

  // WhatsApp Pre-fill URL generator
  const getWhatsAppUrl = () => {
    const verifiedPhone =
      defaultBusiness === "innovation" ? "917080888803" : "917080888807";
    const greeting = encodeURIComponent(
      `Hello JB Group Concierge, I would like to enquire regarding ${
        formType === "room"
          ? `a room stay (${roomCategory})`
          : formType === "banquet"
          ? `${eventType} at ${businessOrVenue || "JB Venues"}`
          : "hospitality services"
      }. My name is ${name || "[Guest]"}.`
    );
    return `https://wa.me/${verifiedPhone}?text=${greeting}`;
  };

  return (
    <div className="bg-[#FAF7F2] border border-[#C4A46B]/30 rounded-sm shadow-xl p-6 sm:p-8 md:p-10">
      {/* Header */}
      <div className="border-b border-[#252522]/10 pb-6 mb-8 text-center sm:text-left">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C4A46B] block mb-2">
          Concierge & Reservations Desk
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl text-[#252522] font-semibold">
          {title || "Plan Your Experience or Celebration"}
        </h3>
        <p className="text-sm text-[#73765B] mt-2 max-w-2xl font-light">
          {subtitle ||
            "Submit your requirements below for personalized room reservations, venue walkthroughs, or bespoke event proposals."}
        </p>

        {/* Tab switchers if not locked to single mode */}
        <div className="flex flex-wrap gap-2 mt-6 justify-center sm:justify-start">
          <button
            type="button"
            onClick={() => {
              setFormType("banquet");
              setSuccessResult(null);
              setErrors([]);
            }}
            className={`px-4 py-2 text-xs font-semibold rounded-sm transition-all ${
              formType === "banquet"
                ? "bg-[#252522] text-[#F7F3EB] shadow-sm"
                : "bg-white text-[#252522] border border-black/10 hover:border-[#C4A46B]"
            }`}
          >
            Banquets & Celebrations
          </button>
          <button
            type="button"
            onClick={() => {
              setFormType("room");
              setSuccessResult(null);
              setErrors([]);
            }}
            className={`px-4 py-2 text-xs font-semibold rounded-sm transition-all ${
              formType === "room"
                ? "bg-[#252522] text-[#F7F3EB] shadow-sm"
                : "bg-white text-[#252522] border border-black/10 hover:border-[#C4A46B]"
            }`}
          >
            Room Stays & Accommodation
          </button>
          <button
            type="button"
            onClick={() => {
              setFormType("general");
              setSuccessResult(null);
              setErrors([]);
            }}
            className={`px-4 py-2 text-xs font-semibold rounded-sm transition-all ${
              formType === "general"
                ? "bg-[#252522] text-[#F7F3EB] shadow-sm"
                : "bg-white text-[#252522] border border-black/10 hover:border-[#C4A46B]"
            }`}
          >
            General & Corporate Enquiry
          </button>
        </div>
      </div>

      {/* Success State */}
      {successResult ? (
        <div className="bg-white border border-[#C4A46B] rounded p-6 sm:p-8 text-center space-y-4 animate-fadeIn">
          <div className="w-14 h-14 mx-auto rounded-full bg-[#F7F3EB] flex items-center justify-center border border-[#C4A46B]">
            <CheckCircle2 className="w-8 h-8 text-[#C4A46B]" />
          </div>
          <h4 className="font-serif text-2xl text-[#252522] font-semibold">
            Enquiry Successfully Registered
          </h4>
          <p className="text-sm text-[#73765B] max-w-lg mx-auto leading-relaxed">
            {successResult.message}
          </p>
          <div className="inline-block bg-[#F7F3EB] px-4 py-2 rounded border border-[#C4A46B]/40">
            <span className="text-xs uppercase tracking-wider text-[#73765B] block">
              Official Reference ID
            </span>
            <span className="font-mono text-sm font-bold text-[#252522]">
              {successResult.referenceId}
            </span>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#25D366] text-white rounded text-xs font-semibold tracking-wider hover:bg-[#20ba59] transition-colors"
            >
              Continue on WhatsApp Concierge
            </a>
            <button
              type="button"
              onClick={() => {
                setSuccessResult(null);
                setName("");
                setPhone("");
                setEmail("");
              }}
              className="px-5 py-2.5 bg-[#252522] text-[#F7F3EB] rounded text-xs font-semibold tracking-wider hover:bg-black transition-colors"
            >
              Submit Another Enquiry
            </button>
          </div>
        </div>
      ) : (
        /* Form Content */
        <form onSubmit={handleSubmit} className="space-y-6">
          {errors.length > 0 && (
            <div className="bg-red-50 border border-red-300 text-red-800 p-4 rounded text-xs space-y-1">
              <div className="flex items-center gap-2 font-bold">
                <AlertCircle className="w-4 h-4 text-red-600" />
                <span>Please complete the required details:</span>
              </div>
              <ul className="list-disc list-inside space-y-0.5 pl-1">
                {errors.map((err, idx) => (
                  <li key={idx}>{err}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#252522] mb-1">
                Full Name *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-[#73765B] absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Vikram Malhotra"
                  className="w-full pl-9 pr-3 py-2.5 text-sm bg-white border border-[#E7DFD1] rounded focus:outline-none focus:border-[#C4A46B] text-[#252522]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#252522] mb-1">
                Telephone Number *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-[#73765B] absolute left-3 top-3" />
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 9876543210"
                  className="w-full pl-9 pr-3 py-2.5 text-sm bg-white border border-[#E7DFD1] rounded focus:outline-none focus:border-[#C4A46B] text-[#252522]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#252522] mb-1">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#73765B] absolute left-3 top-3" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. vikram@example.com"
                  className="w-full pl-9 pr-3 py-2.5 text-sm bg-white border border-[#E7DFD1] rounded focus:outline-none focus:border-[#C4A46B] text-[#252522]"
                />
              </div>
            </div>
          </div>

          {/* Dynamic Section: Room Stays */}
          {formType === "room" && (
            <div className="space-y-4 pt-2 border-t border-black/10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C4A46B]">
                Stay Parameters
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#252522] mb-1">
                    Check-in Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full px-3 py-2.5 text-sm bg-white border border-[#E7DFD1] rounded focus:outline-none focus:border-[#C4A46B] text-[#252522]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#252522] mb-1">
                    Check-out Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full px-3 py-2.5 text-sm bg-white border border-[#E7DFD1] rounded focus:outline-none focus:border-[#C4A46B] text-[#252522]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#252522] mb-1">
                    Room Category *
                  </label>
                  <select
                    value={roomCategory}
                    onChange={(e) => setRoomCategory(e.target.value)}
                    className="w-full px-3 py-2.5 text-sm bg-white border border-[#E7DFD1] rounded focus:outline-none focus:border-[#C4A46B] text-[#252522]"
                  >
                    <option value="Standard Room (Skyhilton)">Standard Room (Skyhilton)</option>
                    <option value="Elite Room (Skyhilton)">Elite Room (Skyhilton)</option>
                    <option value="Deluxe Room (Skyhilton)">Deluxe Room (Skyhilton)</option>
                    <option value="Suite (Skyhilton)">Suite (Skyhilton)</option>
                    <option value="Deluxe Room - 180 sq ft (JB Innovation)">
                      Deluxe Room - 180 sq ft (JB Innovation)
                    </option>
                    <option value="Executive Room with Lounge - 250 sq ft (JB Innovation)">
                      Executive Room with Lounge - 250 sq ft (JB Innovation)
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#252522] mb-1">
                    Guests Count
                  </label>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full px-3 py-2.5 text-sm bg-white border border-[#E7DFD1] rounded focus:outline-none focus:border-[#C4A46B] text-[#252522]"
                  >
                    <option value="1">1 Adult</option>
                    <option value="2">2 Adults</option>
                    <option value="3">3 Adults</option>
                    <option value="4+">Family (4+ Guests)</option>
                    <option value="Group">Bulk Wedding Group Block</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#252522] mb-1">
                  Additional Requests (Optional)
                </label>
                <textarea
                  rows={2}
                  value={roomRequests}
                  onChange={(e) => setRoomRequests(e.target.value)}
                  placeholder="Express check-in, high floor preference, airport transfer assistance, or wedding party notes..."
                  className="w-full px-3 py-2 text-sm bg-white border border-[#E7DFD1] rounded focus:outline-none focus:border-[#C4A46B] text-[#252522]"
                />
              </div>
            </div>
          )}

          {/* Dynamic Section: Banquet & Event */}
          {formType === "banquet" && (
            <div className="space-y-4 pt-2 border-t border-black/10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C4A46B]">
                Celebration Details
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#252522] mb-1">
                    Event Type *
                  </label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full px-3 py-2.5 text-sm bg-white border border-[#E7DFD1] rounded focus:outline-none focus:border-[#C4A46B] text-[#252522]"
                  >
                    <option value="Wedding / Grand Reception">Wedding / Grand Reception</option>
                    <option value="Ring Ceremony / Engagement">Ring Ceremony / Engagement</option>
                    <option value="Mehndi / Sangeet / Haldi">Mehndi / Sangeet / Haldi</option>
                    <option value="Milestone Birthday / Anniversary">Milestone Birthday / Anniversary</option>
                    <option value="Corporate Seminar / Conclave">Corporate Seminar / Conclave</option>
                    <option value="Cocktail Evening / Party">Cocktail Evening / Party</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#252522] mb-1">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3 py-2.5 text-sm bg-white border border-[#E7DFD1] rounded focus:outline-none focus:border-[#C4A46B] text-[#252522]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#252522] mb-1">
                    Approx. Guest Count *
                  </label>
                  <select
                    value={paxCount}
                    onChange={(e) => setPaxCount(e.target.value)}
                    className="w-full px-3 py-2.5 text-sm bg-white border border-[#E7DFD1] rounded focus:outline-none focus:border-[#C4A46B] text-[#252522]"
                  >
                    <option value="20-30">20 – 30 Guests (Intimate Gathering / Café)</option>
                    <option value="40-60">40 – 60 Guests (VIP Hall / Upper Deck)</option>
                    <option value="50-70">50 – 70 Guests (Open Terrace LED Space)</option>
                    <option value="80-100">80 – 100 Guests (Infinity Hall)</option>
                    <option value="100-300">100 – 300 Guests (Crown / Kanishk Hall)</option>
                    <option value="300-800+">300 – 800+ Guests (Grand Lawns & Banquets)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#252522] mb-1">
                    Preferred Destination *
                  </label>
                  <select
                    value={businessOrVenue}
                    onChange={(e) => setBusinessOrVenue(e.target.value)}
                    className="w-full px-3 py-2.5 text-sm bg-white border border-[#E7DFD1] rounded focus:outline-none focus:border-[#C4A46B] text-[#252522]"
                  >
                    <option value="JB Innovation (Crown / Kanishk / Lawns / Terrace)">
                      JB Innovation (Crown / Kanishk / Lawns / Terrace)
                    </option>
                    <option value="JB Skyhilton (Infinity / Terrace LED / VIP / Upper Deck)">
                      JB Skyhilton (Infinity / Terrace LED / VIP / Upper Deck)
                    </option>
                    <option value="Urban Sweets & Bakers (Celebration Banquet)">
                      Urban Sweets & Bakers (Celebration Banquet)
                    </option>
                    <option value="Not Sure - Suggest Best Fit Across JB Group">
                      Not Sure - Suggest Best Fit Across JB Group
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#252522] mb-1">
                  Specific Requirements or Thematic Setup
                </label>
                <textarea
                  rows={2}
                  value={eventRequirements}
                  onChange={(e) => setEventRequirements(e.target.value)}
                  placeholder="Mandap and floral staging, catering preferences (North Indian, live counters), audiovisual requirements..."
                  className="w-full px-3 py-2 text-sm bg-white border border-[#E7DFD1] rounded focus:outline-none focus:border-[#C4A46B] text-[#252522]"
                />
              </div>
            </div>
          )}

          {/* Dynamic Section: General & Corporate */}
          {formType === "general" && (
            <div className="space-y-4 pt-2 border-t border-black/10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C4A46B]">
                Enquiry Details
              </span>
              <div>
                <label className="block text-xs font-semibold text-[#252522] mb-1">
                  Business / Offering of Interest
                </label>
                <select
                  value={businessOrVenue}
                  onChange={(e) => setBusinessOrVenue(e.target.value)}
                  className="w-full px-3 py-2.5 text-sm bg-white border border-[#E7DFD1] rounded focus:outline-none focus:border-[#C4A46B] text-[#252522]"
                >
                  <option value="JB Group Corporate Hospitality">
                    JB Group Corporate Hospitality
                  </option>
                  <option value="JB Skyhilton (Hotel & Dining)">
                    JB Skyhilton (Hotel & Dining)
                  </option>
                  <option value="Urban Sweets & Bakers (Mithai, Bakery & Gifting)">
                    Urban Sweets & Bakers (Mithai, Bakery & Gifting)
                  </option>
                  <option value="JB Innovation (Weddings & Lawns)">
                    JB Innovation (Weddings & Lawns)
                  </option>
                  <option value="Corporate Bulk Festive Gifting">
                    Corporate Bulk Festive Gifting
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#252522] mb-1">
                  Your Message *
                </label>
                <textarea
                  rows={4}
                  required
                  value={generalMessage}
                  onChange={(e) => setGeneralMessage(e.target.value)}
                  placeholder="Please describe how our hospitality team can assist you..."
                  className="w-full px-3 py-2 text-sm bg-white border border-[#E7DFD1] rounded focus:outline-none focus:border-[#C4A46B] text-[#252522]"
                />
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-black/10">
            <p className="text-xs text-[#73765B] text-center sm:text-left">
              Official data privacy guaranteed. Your enquiry is logged securely with JB Group management.
            </p>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-8 py-3 bg-[#252522] text-[#F7F3EB] rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-[#3D3D39] transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Registering Enquiry...</span>
              ) : (
                <>
                  <span>Submit Formal Enquiry</span>
                  <Send className="w-3.5 h-3.5 text-[#C4A46B]" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
