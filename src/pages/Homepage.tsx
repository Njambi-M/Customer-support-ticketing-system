import React from "react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="flex justify-evenly my-8">
      <div>
        <h1 className="text-5xl mt-20">Welcome to Customer Ticketing</h1>
        <p className="my-8 text-xl">Raise a ticket and have your issue solved within minutes</p>
        <Button asChild className="mt-10">
          <Link to="/register">Get started</Link>
        </Button>
      </div>
      <div>
        <img src="/ticket.png" />
      </div>
    </div>
  );
}
