import { ShoppingCart, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img src="/lovable-uploads/1aaa2601-2b6a-4ba0-bb44-bb655b793457.png" alt="Aureo" className="h-12" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/products" className="text-navy hover:text-navy-light transition-colors">
              {t('allJewelry')}
            </Link>
            <Link to="/products/necklaces" className="text-navy hover:text-navy-light transition-colors">
              {t('necklaces')}
            </Link>
            <Link to="/products/rings" className="text-navy hover:text-navy-light transition-colors">
              {t('rings')}
            </Link>
            <Link to="/products/earrings" className="text-navy hover:text-navy-light transition-colors">
              {t('earrings')}
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Input
                type="search"
                placeholder={t('search')}
                className="pl-10 pr-4 py-2 rounded-full border-gray-200"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            </div>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5 text-navy" />
            </Button>
            <LanguageSwitcher />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6 text-navy" />
          </Button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <Link
                to="/products"
                className="text-navy hover:text-navy-light transition-colors px-4 py-2"
              >
                {t('allJewelry')}
              </Link>
              <Link
                to="/products/necklaces"
                className="text-navy hover:text-navy-light transition-colors px-4 py-2"
              >
                {t('necklaces')}
              </Link>
              <Link
                to="/products/rings"
                className="text-navy hover:text-navy-light transition-colors px-4 py-2"
              >
                {t('rings')}
              </Link>
              <Link
                to="/products/earrings"
                className="text-navy hover:text-navy-light transition-colors px-4 py-2"
              >
                {t('earrings')}
              </Link>
              <div className="relative px-4">
                <Input
                  type="search"
                  placeholder={t('search')}
                  className="pl-10 pr-4 py-2 w-full rounded-full border-gray-200"
                />
                <Search className="absolute left-7 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              </div>
              <div className="px-4">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};