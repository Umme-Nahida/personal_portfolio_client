import React from "react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

// Example user data — replace with real data / props or a fetch hook.
const demoUser = {
  id: "u_01",
  name: "Umme Nahida",
  role: "Frontend Developer",
  email: "umme.nahida@example.com",
  phone: "+880-1XXXXXXXXX",
  location: "Dhaka, Bangladesh",
  bio: "Passionate React/Next.js dev. Loves building delightful UI with shadcn & Tailwind.",
  avatar:
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
  social: {
    github: "nahida-dev",
    linkedin: "umme-nahida",
  },
};

export default function UserProfileDashboard() {
  const user = demoUser;

  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left column - profile summary */}
        <Card className="col-span-1">
          <CardHeader>
            <div className="flex items-center gap-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user.name.split(" ")[0][0]}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-medium">{user.name}</h3>
                <p className="text-sm text-muted-foreground">{user?.role || "Frontend Developer"}</p>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <p className="text-sm mb-4">{user.bio}</p>

            <div className="space-y-2 text-sm">
              <div>
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="font-medium">{user.email}</div>
              </div>

              <div>
                <div className="text-xs text-muted-foreground">Phone</div>
                <div className="font-medium">{user.phone || "+880-1XXXXXXXXX"}</div>
              </div>

              <div>
                <div className="text-xs text-muted-foreground">Location</div>
                <div className="font-medium">{user.location || "Dhaka, Bangladesh"}</div>
              </div>

              <div>
                <div className="text-xs text-muted-foreground">Social</div>
                <div className="flex gap-3 text-sm">
                  <a className="underline" href={`https://github.com/Umme-Nahida`} target="_blank" rel="noreferrer">Github</a>
                  <a className="underline" href={`https://www.linkedin.com/in/umme-nahida`} target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex gap-2">
            <Button variant="secondary">Message</Button>
            <Button>Edit Profile</Button>
          </CardFooter>
        </Card>

        {/* Right column - details & actions */}
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Account Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <div className="text-sm text-muted-foreground">Member since</div>
                  <div className="font-medium">April 10, 2023</div>
                </div>

                <div>
                  <div className="text-sm text-muted-foreground">Plan</div>
                  <div className="font-medium">Pro</div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-sm text-muted-foreground">Email verified</div>
                  <Switch defaultChecked />
                </div>

                <div>
                  <Button>Manage Subscription</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Profile Settings</CardTitle>
            </CardHeader>

            <CardContent>
              <Tabs defaultValue="profile">
                <div className="flex flex-col md:flex-row gap-6">
                  <TabsList className="w-full md:w-48">
                    <TabsTrigger value="profile">Profile</TabsTrigger>
                    <TabsTrigger value="security">Security</TabsTrigger>
                    <TabsTrigger value="notifications">Notifications</TabsTrigger>
                  </TabsList>

                  <div className="flex-1">
                    <TabsContent value="profile">
                      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full name</Label>
                          <Input id="name" defaultValue={user?.name} />
                        </div>

                        <div>
                          <Label htmlFor="role">Role</Label>
                          <Input id="role" defaultValue={user.role || "Frontend Developer"} />
                        </div>

                        <div className="md:col-span-2">
                          <Label htmlFor="bio">Bio</Label>
                          <Textarea id="bio" defaultValue={user?.bio || "" } rows={3} />
                        </div>

                        <div className="md:col-span-2 flex justify-end">
                          <Button type="submit">Save changes</Button>
                        </div>
                      </form>
                    </TabsContent>

                    <TabsContent value="security">
                      <div className="space-y-4">
                        <div>
                          <div className="text-sm text-muted-foreground">Change password</div>
                          <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                            <Input placeholder="Current password" type="password" />
                            <Input placeholder="New password" type="password" />
                          </div>
                        </div>

                        <Separator />

                        <div className="flex justify-between items-center">
                          <div>
                            <div className="text-sm font-medium">Two-factor authentication</div>
                            <div className="text-xs text-muted-foreground">Use an authenticator app for extra security.</div>
                          </div>
                          <Switch />
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="notifications">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm font-medium">Email notifications</div>
                            <div className="text-xs text-muted-foreground">Receive updates and product news.</div>
                          </div>
                          <Switch defaultChecked />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm font-medium">SMS notifications</div>
                            <div className="text-xs text-muted-foreground">Order updates and alerts.</div>
                          </div>
                          <Switch />
                        </div>

                        <div className="flex justify-end">
                          <Button>Save preferences</Button>
                        </div>
                      </div>
                    </TabsContent>
                  </div>
                </div>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
