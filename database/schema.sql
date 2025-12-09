-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Storage bucket for images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('content-images', 'content-images', true)
ON CONFLICT (id) DO NOTHING;

-- ============================================
-- HOME PAGE TABLES
-- ============================================

-- Home Hero Section
CREATE TABLE IF NOT EXISTS home_hero (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  subtitle TEXT,
  description TEXT,
  primary_button_text TEXT,
  primary_button_link TEXT,
  secondary_button_text TEXT,
  secondary_button_link TEXT,
  phone TEXT,
  background_image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Home About Section
CREATE TABLE IF NOT EXISTS home_about (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  content TEXT,
  image_url TEXT,
  features JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Home Services Section
CREATE TABLE IF NOT EXISTS home_services (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  services JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Home Why Choose Section
CREATE TABLE IF NOT EXISTS home_why_choose (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  features JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Home Reviews Section
CREATE TABLE IF NOT EXISTS home_reviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  reviews JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- SERVICES PAGE TABLES
-- ============================================

-- Services Hero Section
CREATE TABLE IF NOT EXISTS services_hero (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  subtitle TEXT,
  description TEXT,
  button_text TEXT,
  button_link TEXT,
  background_image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Services What We Offer Section
CREATE TABLE IF NOT EXISTS services_what_we_offer (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  services JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Services Why Choose Section
CREATE TABLE IF NOT EXISTS services_why_choose (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  features JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Services We Serve Section
CREATE TABLE IF NOT EXISTS services_we_serve (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  categories JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- CONTACT PAGE TABLES
-- ============================================

-- Contact Hero Section
CREATE TABLE IF NOT EXISTS contact_hero (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  subtitle TEXT,
  description TEXT,
  background_image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Contact Cards Section
CREATE TABLE IF NOT EXISTS contact_cards (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  cards JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Contact Form Section
CREATE TABLE IF NOT EXISTS contact_form (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  form_fields JSONB DEFAULT '[]'::jsonb,
  submit_button_text TEXT DEFAULT 'Submit',
  success_message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Contact Get In Touch Section
CREATE TABLE IF NOT EXISTS contact_get_in_touch (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  contact_info JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Contact Our Services Section
CREATE TABLE IF NOT EXISTS contact_our_services (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  services JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Contact Why Choose Us Section
CREATE TABLE IF NOT EXISTS contact_why_choose_us (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  features JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- UPDATE TRIGGERS
-- ============================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Drop existing triggers if they exist (for re-running the script)
DROP TRIGGER IF EXISTS update_home_hero_updated_at ON home_hero;
DROP TRIGGER IF EXISTS update_home_about_updated_at ON home_about;
DROP TRIGGER IF EXISTS update_home_services_updated_at ON home_services;
DROP TRIGGER IF EXISTS update_home_why_choose_updated_at ON home_why_choose;
DROP TRIGGER IF EXISTS update_home_reviews_updated_at ON home_reviews;

DROP TRIGGER IF EXISTS update_services_hero_updated_at ON services_hero;
DROP TRIGGER IF EXISTS update_services_what_we_offer_updated_at ON services_what_we_offer;
DROP TRIGGER IF EXISTS update_services_why_choose_updated_at ON services_why_choose;
DROP TRIGGER IF EXISTS update_services_we_serve_updated_at ON services_we_serve;

DROP TRIGGER IF EXISTS update_contact_hero_updated_at ON contact_hero;
DROP TRIGGER IF EXISTS update_contact_cards_updated_at ON contact_cards;
DROP TRIGGER IF EXISTS update_contact_form_updated_at ON contact_form;
DROP TRIGGER IF EXISTS update_contact_get_in_touch_updated_at ON contact_get_in_touch;
DROP TRIGGER IF EXISTS update_contact_our_services_updated_at ON contact_our_services;
DROP TRIGGER IF EXISTS update_contact_why_choose_us_updated_at ON contact_why_choose_us;

-- Create triggers for all tables
CREATE TRIGGER update_home_hero_updated_at BEFORE UPDATE ON home_hero FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_home_about_updated_at BEFORE UPDATE ON home_about FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_home_services_updated_at BEFORE UPDATE ON home_services FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_home_why_choose_updated_at BEFORE UPDATE ON home_why_choose FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_home_reviews_updated_at BEFORE UPDATE ON home_reviews FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_services_hero_updated_at BEFORE UPDATE ON services_hero FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_services_what_we_offer_updated_at BEFORE UPDATE ON services_what_we_offer FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_services_why_choose_updated_at BEFORE UPDATE ON services_why_choose FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_services_we_serve_updated_at BEFORE UPDATE ON services_we_serve FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_contact_hero_updated_at BEFORE UPDATE ON contact_hero FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_contact_cards_updated_at BEFORE UPDATE ON contact_cards FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_contact_form_updated_at BEFORE UPDATE ON contact_form FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_contact_get_in_touch_updated_at BEFORE UPDATE ON contact_get_in_touch FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_contact_our_services_updated_at BEFORE UPDATE ON contact_our_services FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_contact_why_choose_us_updated_at BEFORE UPDATE ON contact_why_choose_us FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================

-- Enable RLS on all tables
ALTER TABLE home_hero ENABLE ROW LEVEL SECURITY;
ALTER TABLE home_about ENABLE ROW LEVEL SECURITY;
ALTER TABLE home_services ENABLE ROW LEVEL SECURITY;
ALTER TABLE home_why_choose ENABLE ROW LEVEL SECURITY;
ALTER TABLE home_reviews ENABLE ROW LEVEL SECURITY;

ALTER TABLE services_hero ENABLE ROW LEVEL SECURITY;
ALTER TABLE services_what_we_offer ENABLE ROW LEVEL SECURITY;
ALTER TABLE services_why_choose ENABLE ROW LEVEL SECURITY;
ALTER TABLE services_we_serve ENABLE ROW LEVEL SECURITY;

ALTER TABLE contact_hero ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_cards ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_form ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_get_in_touch ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_our_services ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_why_choose_us ENABLE ROW LEVEL SECURITY;

-- ============================================
-- HOME PAGE POLICIES
-- ============================================

-- Home Hero Policies
CREATE POLICY "Allow public read access on home_hero" ON home_hero FOR SELECT USING (true);
CREATE POLICY "Allow public insert on home_hero" ON home_hero FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update on home_hero" ON home_hero FOR UPDATE USING (true);
CREATE POLICY "Allow public delete on home_hero" ON home_hero FOR DELETE USING (true);

-- Home About Policies
CREATE POLICY "Allow public read access on home_about" ON home_about FOR SELECT USING (true);
CREATE POLICY "Allow public insert on home_about" ON home_about FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update on home_about" ON home_about FOR UPDATE USING (true);
CREATE POLICY "Allow public delete on home_about" ON home_about FOR DELETE USING (true);

-- Home Services Policies
CREATE POLICY "Allow public read access on home_services" ON home_services FOR SELECT USING (true);
CREATE POLICY "Allow public insert on home_services" ON home_services FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update on home_services" ON home_services FOR UPDATE USING (true);
CREATE POLICY "Allow public delete on home_services" ON home_services FOR DELETE USING (true);

-- Home Why Choose Policies
CREATE POLICY "Allow public read access on home_why_choose" ON home_why_choose FOR SELECT USING (true);
CREATE POLICY "Allow public insert on home_why_choose" ON home_why_choose FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update on home_why_choose" ON home_why_choose FOR UPDATE USING (true);
CREATE POLICY "Allow public delete on home_why_choose" ON home_why_choose FOR DELETE USING (true);

-- Home Reviews Policies
CREATE POLICY "Allow public read access on home_reviews" ON home_reviews FOR SELECT USING (true);
CREATE POLICY "Allow public insert on home_reviews" ON home_reviews FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update on home_reviews" ON home_reviews FOR UPDATE USING (true);
CREATE POLICY "Allow public delete on home_reviews" ON home_reviews FOR DELETE USING (true);

-- ============================================
-- SERVICES PAGE POLICIES
-- ============================================

-- Services Hero Policies
CREATE POLICY "Allow public read access on services_hero" ON services_hero FOR SELECT USING (true);
CREATE POLICY "Allow public insert on services_hero" ON services_hero FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update on services_hero" ON services_hero FOR UPDATE USING (true);
CREATE POLICY "Allow public delete on services_hero" ON services_hero FOR DELETE USING (true);

-- Services What We Offer Policies
CREATE POLICY "Allow public read access on services_what_we_offer" ON services_what_we_offer FOR SELECT USING (true);
CREATE POLICY "Allow public insert on services_what_we_offer" ON services_what_we_offer FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update on services_what_we_offer" ON services_what_we_offer FOR UPDATE USING (true);
CREATE POLICY "Allow public delete on services_what_we_offer" ON services_what_we_offer FOR DELETE USING (true);

-- Services Why Choose Policies
CREATE POLICY "Allow public read access on services_why_choose" ON services_why_choose FOR SELECT USING (true);
CREATE POLICY "Allow public insert on services_why_choose" ON services_why_choose FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update on services_why_choose" ON services_why_choose FOR UPDATE USING (true);
CREATE POLICY "Allow public delete on services_why_choose" ON services_why_choose FOR DELETE USING (true);

-- Services We Serve Policies
CREATE POLICY "Allow public read access on services_we_serve" ON services_we_serve FOR SELECT USING (true);
CREATE POLICY "Allow public insert on services_we_serve" ON services_we_serve FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update on services_we_serve" ON services_we_serve FOR UPDATE USING (true);
CREATE POLICY "Allow public delete on services_we_serve" ON services_we_serve FOR DELETE USING (true);

-- ============================================
-- CONTACT PAGE POLICIES
-- ============================================

-- Contact Hero Policies
CREATE POLICY "Allow public read access on contact_hero" ON contact_hero FOR SELECT USING (true);
CREATE POLICY "Allow public insert on contact_hero" ON contact_hero FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update on contact_hero" ON contact_hero FOR UPDATE USING (true);
CREATE POLICY "Allow public delete on contact_hero" ON contact_hero FOR DELETE USING (true);

-- Contact Cards Policies
CREATE POLICY "Allow public read access on contact_cards" ON contact_cards FOR SELECT USING (true);
CREATE POLICY "Allow public insert on contact_cards" ON contact_cards FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update on contact_cards" ON contact_cards FOR UPDATE USING (true);
CREATE POLICY "Allow public delete on contact_cards" ON contact_cards FOR DELETE USING (true);

-- Contact Form Policies
CREATE POLICY "Allow public read access on contact_form" ON contact_form FOR SELECT USING (true);
CREATE POLICY "Allow public insert on contact_form" ON contact_form FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update on contact_form" ON contact_form FOR UPDATE USING (true);
CREATE POLICY "Allow public delete on contact_form" ON contact_form FOR DELETE USING (true);

-- Contact Get In Touch Policies
CREATE POLICY "Allow public read access on contact_get_in_touch" ON contact_get_in_touch FOR SELECT USING (true);
CREATE POLICY "Allow public insert on contact_get_in_touch" ON contact_get_in_touch FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update on contact_get_in_touch" ON contact_get_in_touch FOR UPDATE USING (true);
CREATE POLICY "Allow public delete on contact_get_in_touch" ON contact_get_in_touch FOR DELETE USING (true);

-- Contact Our Services Policies
CREATE POLICY "Allow public read access on contact_our_services" ON contact_our_services FOR SELECT USING (true);
CREATE POLICY "Allow public insert on contact_our_services" ON contact_our_services FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update on contact_our_services" ON contact_our_services FOR UPDATE USING (true);
CREATE POLICY "Allow public delete on contact_our_services" ON contact_our_services FOR DELETE USING (true);

-- Contact Why Choose Us Policies
CREATE POLICY "Allow public read access on contact_why_choose_us" ON contact_why_choose_us FOR SELECT USING (true);
CREATE POLICY "Allow public insert on contact_why_choose_us" ON contact_why_choose_us FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update on contact_why_choose_us" ON contact_why_choose_us FOR UPDATE USING (true);
CREATE POLICY "Allow public delete on contact_why_choose_us" ON contact_why_choose_us FOR DELETE USING (true);

-- ============================================
-- STORAGE POLICIES
-- ============================================

-- Storage policies for content-images bucket
CREATE POLICY "Allow public read access on content-images" ON storage.objects
  FOR SELECT USING (bucket_id = 'content-images');

CREATE POLICY "Allow public upload on content-images" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'content-images');

CREATE POLICY "Allow public update on content-images" ON storage.objects
  FOR UPDATE USING (bucket_id = 'content-images');

CREATE POLICY "Allow public delete on content-images" ON storage.objects
  FOR DELETE USING (bucket_id = 'content-images');

