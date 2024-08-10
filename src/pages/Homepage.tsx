import React from "react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      <div>
        <h1>Welcome to Customer Ticketing</h1>
        <p>Raise a ticket and have your issue solved within minutes</p>
        <Button asChild>
          <Link to="/register">Get started</Link>
        </Button>
      </div>
      <div>
        <img src="/ticket.png" />
      </div>
    </div>
  );
}
