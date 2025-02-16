import { useTranslation } from "react-i18next";

export const Footer = () => {
    const {t}=useTranslation()
    return (
        <footer className="flex flex-wrap items-center justify-between gap-4 pt-4">
            <p className="text-base font-medium text-slate-900 dark:text-slate-50">© 2025  GestureLearn All Rights Reserved</p>
            <div className="flex flex-wrap gap-x-2">
                <a
                    href="#"
                    className="link"
                >
                    {t("privacy_policy")}
                </a>
                <a
                    href="#"
                    className="link"
                >
                    Terms of Service
                </a>
            </div>
        </footer>
    );
};
