"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Settings2Icon,
    ShieldCheckIcon,
    SmartphoneIcon,
    KeyIcon,
    BellIcon,
    MoonIcon,
    GlobeIcon,
    LogOutIcon,
    AlertCircleIcon,
    CheckCircle2Icon,
    MailIcon,
    PhoneIcon,
    LockIcon,
    AlertTriangleIcon,
} from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
    DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

const initialSecurityInfo = {
    lastLogin: "June 15, 2024 10:30 AM",
    lastLoginIP: "192.168.1.1",
    lastLoginLocation: "Mumbai, India",
    twoFactorEnabled: true,
    emailNotifications: true,
    smsAlerts: false,
    loginAlerts: true,
    darkMode: false,
    deviceLogins: [
        {
            id: 1,
            device: "Windows PC - Chrome",
            location: "Mumbai, India",
            lastActive: "Current session",
            status: "active",
            browser: "Chrome 115.0.5790",
            os: "Windows 11",
            ip: "192.168.1.1"
        },
        {
            id: 2,
            device: "iPhone 13 - Safari",
            location: "Mumbai, India",
            lastActive: "2 hours ago",
            status: "active",
            browser: "Safari 17.0",
            os: "iOS 17.1",
            ip: "192.168.1.100"
        },
        {
            id: 3,
            device: "MacBook Pro - Firefox",
            location: "Delhi, India",
            lastActive: "2 days ago",
            status: "inactive",
            browser: "Firefox 120.0",
            os: "macOS 14.1",
            ip: "192.168.2.50"
        }
    ]
};

const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "hi", name: "हिंदी", flag: "🇮🇳" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "ja", name: "日本語", flag: "🇯🇵" },
];

export default function SettingsPage() {
    const [securityInfo, setSecurityInfo] = useState(initialSecurityInfo);
    const [showDeviceDetails, setShowDeviceDetails] = useState<number | null>(null);
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);

    const handleToggle = (setting: keyof typeof securityInfo) => {
        setSecurityInfo(prev => ({
            ...prev,
            [setting]: !prev[setting]
        }));
    };

    const handleRevokeAccess = (deviceId: number) => {
        setSecurityInfo(prev => ({
            ...prev,
            deviceLogins: prev.deviceLogins.map(device =>
                device.id === deviceId
                    ? { ...device, status: "inactive" }
                    : device
            )
        }));
    };

    const handleLanguageChange = (language: typeof languages[0]) => {
        setSelectedLanguage(language);
    };

    const handleDeleteAccount = () => {
        // Here you would implement the actual account deletion logic
        console.log("Deleting account...");
        setShowDeleteDialog(false);
    };

    return (
        <div className="p-4 w-full">
            <div className="flex flex-col w-full space-y-6">
                {/* Security Overview */}
                <Container delay={0.1}>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0">
                            <div>
                                <CardTitle className="text-2xl font-bold">Security Overview</CardTitle>
                                <CardDescription>Manage your account security and authentication</CardDescription>
                            </div>
                            <ShieldCheckIcon className="h-8 w-8 text-primary" />
                        </CardHeader>
                        <CardContent className="grid gap-6">
                            <div className="flex items-center justify-between">
                                <div className="space-y-1">
                                    <div className="flex items-center space-x-2">
                                        <LockIcon className="h-4 w-4 text-primary" />
                                        <p className="font-medium">Two-Factor Authentication</p>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        Add an extra layer of security to your account
                                    </p>
                                </div>
                                <Switch
                                    checked={securityInfo.twoFactorEnabled}
                                    onCheckedChange={() => handleToggle('twoFactorEnabled')}
                                    className="data-[state=checked]:bg-green-500"
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="space-y-1">
                                    <div className="flex items-center space-x-2">
                                        <MailIcon className="h-4 w-4 text-primary" />
                                        <p className="font-medium">Email Notifications</p>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        Receive security alerts via email
                                    </p>
                                </div>
                                <Switch
                                    checked={securityInfo.emailNotifications}
                                    onCheckedChange={() => handleToggle('emailNotifications')}
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="space-y-1">
                                    <div className="flex items-center space-x-2">
                                        <PhoneIcon className="h-4 w-4 text-primary" />
                                        <p className="font-medium">SMS Alerts</p>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        Get instant SMS notifications for important security events
                                    </p>
                                </div>
                                <Switch
                                    checked={securityInfo.smsAlerts}
                                    onCheckedChange={() => handleToggle('smsAlerts')}
                                />
                            </div>

                            <div className="space-y-4 mt-4 p-4 bg-muted/50 rounded-lg">
                                <div className="flex items-center justify-between">
                                    <p className="font-medium">Last Login</p>
                                    <p className="text-sm text-muted-foreground">{securityInfo.lastLogin}</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="font-medium">IP Address</p>
                                    <p className="text-sm text-muted-foreground">{securityInfo.lastLoginIP}</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="font-medium">Location</p>
                                    <p className="text-sm text-muted-foreground">{securityInfo.lastLoginLocation}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Container>

                {/* Device Logins */}
                <Container delay={0.2}>
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-xl font-bold">Device Logins</CardTitle>
                            <CardDescription>Manage your active sessions and devices</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                {securityInfo.deviceLogins.map((device, index) => (
                                    <div
                                        key={device.id}
                                        className="flex flex-col space-y-4 p-4 rounded-lg border animate-in fade-in-50 duration-500"
                                        style={{ animationDelay: `${index * 150}ms` }}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-4">
                                                <SmartphoneIcon className="h-6 w-6 text-muted-foreground" />
                                                <div>
                                                    <p className="font-medium">{device.device}</p>
                                                    <p className="text-sm text-muted-foreground">
                                                        {device.location} • {device.lastActive}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-4">
                                                <Badge
                                                    variant={device.status === "active" ? "default" : "secondary"}
                                                    className="animate-in fade-in zoom-in duration-300"
                                                >
                                                    {device.status === "active" ? (
                                                        <CheckCircle2Icon className="h-3 w-3 mr-1" />
                                                    ) : (
                                                        <AlertCircleIcon className="h-3 w-3 mr-1" />
                                                    )}
                                                    {device.status}
                                                </Badge>
                                                {device.status === "active" && (
                                                    <Button
                                                        variant="destructive"
                                                        size="sm"
                                                        className="animate-in fade-in slide-in-from-right duration-300"
                                                        onClick={() => handleRevokeAccess(device.id)}
                                                    >
                                                        Revoke
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                        
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="w-full text-center justify-center"
                                            onClick={() => setShowDeviceDetails(showDeviceDetails === device.id ? null : device.id)}
                                        >
                                            {showDeviceDetails === device.id ? "Hide Details" : "Show Details"}
                                        </Button>

                                        {showDeviceDetails === device.id && (
                                            <div className="space-y-2 p-4 bg-muted/50 rounded-lg animate-in fade-in-50 slide-in-from-top duration-300">
                                                <div className="flex justify-between">
                                                    <span className="text-sm font-medium">Browser</span>
                                                    <span className="text-sm text-muted-foreground">{device.browser}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-sm font-medium">Operating System</span>
                                                    <span className="text-sm text-muted-foreground">{device.os}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-sm font-medium">IP Address</span>
                                                    <span className="text-sm text-muted-foreground">{device.ip}</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </Container>

                {/* Additional Settings */}
                <Container delay={0.3}>
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-xl font-bold">Preferences</CardTitle>
                            <CardDescription>Customize your app experience</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <BellIcon className="h-5 w-5 text-muted-foreground" />
                                        <div className="space-y-1">
                                            <p className="font-medium">Login Alerts</p>
                                            <p className="text-sm text-muted-foreground">
                                                Get notified about new login attempts
                                            </p>
                                        </div>
                                    </div>
                                    <Switch
                                        checked={securityInfo.loginAlerts}
                                        onCheckedChange={() => handleToggle('loginAlerts')}
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <MoonIcon className="h-5 w-5 text-muted-foreground" />
                                        <div className="space-y-1">
                                            <p className="font-medium">Dark Mode</p>
                                            <p className="text-sm text-muted-foreground">
                                                Toggle dark/light theme
                                            </p>
                                        </div>
                                    </div>
                                    <Switch
                                        checked={securityInfo.darkMode}
                                        onCheckedChange={() => handleToggle('darkMode')}
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <GlobeIcon className="h-5 w-5 text-muted-foreground" />
                                        <div className="space-y-1">
                                            <p className="font-medium">Language</p>
                                            <p className="text-sm text-muted-foreground">
                                                Choose your preferred language
                                            </p>
                                        </div>
                                    </div>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="outline" size="sm" className="w-[150px] justify-between">
                                                <span className="flex items-center gap-2">
                                                    <span>{selectedLanguage.flag}</span>
                                                    <span>{selectedLanguage.name}</span>
                                                </span>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end" className="w-[150px]">
                                            <DropdownMenuLabel>Select Language</DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            {languages.map((language) => (
                                                <DropdownMenuItem
                                                    key={language.code}
                                                    className="flex items-center gap-2 cursor-pointer"
                                                    onClick={() => handleLanguageChange(language)}
                                                >
                                                    <span>{language.flag}</span>
                                                    <span>{language.name}</span>
                                                </DropdownMenuItem>
                                            ))}
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Container>

                {/* Danger Zone */}
                <Container delay={0.4}>
                    <Card className="border-destructive/50 hover:border-destructive transition-colors">
                        <CardHeader>
                            <div className="flex items-center space-x-2">
                                <AlertTriangleIcon className="h-5 w-5 text-destructive" />
                                <CardTitle className="text-xl font-bold text-destructive">Danger Zone</CardTitle>
                            </div>
                            <CardDescription>Irreversible and destructive actions</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="space-y-1">
                                        <p className="font-medium">Delete Account</p>
                                        <p className="text-sm text-muted-foreground">
                                            Permanently delete your account and all data
                                        </p>
                                    </div>
                                    <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
                                        <DialogTrigger asChild>
                                            <Button variant="destructive" size="sm">
                                                <LogOutIcon className="h-4 w-4 mr-2" />
                                                Delete Account
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle className="text-destructive flex items-center gap-2">
                                                    <AlertTriangleIcon className="h-5 w-5" />
                                                    Delete Account
                                                </DialogTitle>
                                                <DialogDescription>
                                                    This action cannot be undone. This will permanently delete your account
                                                    and remove all your data from our servers.
                                                </DialogDescription>
                                            </DialogHeader>
                                            <div className="space-y-4 py-4">
                                                <div className="flex items-center space-x-4">
                                                    <AlertCircleIcon className="h-8 w-8 text-destructive" />
                                                    <div className="space-y-1">
                                                        <p className="text-sm font-medium">You will lose:</p>
                                                        <ul className="text-sm text-muted-foreground list-disc pl-4">
                                                            <li>All your financial data and transaction history</li>
                                                            <li>Budget settings and goals</li>
                                                            <li>Account connections and preferences</li>
                                                            <li>Saved reports and analytics</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <DialogFooter>
                                                <Button
                                                    variant="ghost"
                                                    onClick={() => setShowDeleteDialog(false)}
                                                >
                                                    Cancel
                                                </Button>
                                                <Button
                                                    variant="destructive"
                                                    onClick={handleDeleteAccount}
                                                    className="gap-2"
                                                >
                                                    <LogOutIcon className="h-4 w-4" />
                                                    Delete Account
                                                </Button>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Container>
            </div>
        </div>
    );
} 