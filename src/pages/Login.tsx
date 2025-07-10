"use client";

import type React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useAuth } from "../contexts/AuthContext";
import logoSvg from "@/assets/logo.svg";
import MovingPatternCanvas from "@/components/BlobCanvas";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (login(email, password)) {
      navigate("/products");
    } else {
      setError("Invalid email or password");
    }
  };

  const demoUsers = [
    { email: "caren_lyss4002@gmail.com", name: "Alyssa Caren" },
    { email: "yofi_15@gmail.com", name: "Yofi Dairani" },
    { email: "lau_pau404@gmail.com", name: "Paula Laura" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative px-4">
      <MovingPatternCanvas />
      <div className="w-full max-w-md space-y-6 relative z-10">
        <div className="text-center">
          <img src={logoSvg} alt="FIGYURED" className="h-16 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-orange-500">FIGYURED</h1>
          <p className="text-gray-600">Sign in to your account</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardDescription className="text-xs">
              Use any of these accounts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {demoUsers.map((user, index) => (
                <div key={index} className="text-xs p-2 bg-gray-50 rounded">
                  <div className="font-medium">{user.name}</div>
                  <div className="text-gray-600">{user.email}</div>
                  <div className="text-orange-500 font-medium">
                    Password:{" "}
                    {user.email.split("_")[0] || user.email.split(".")[0]}123
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
