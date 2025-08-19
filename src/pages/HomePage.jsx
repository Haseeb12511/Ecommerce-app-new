import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Quote,
  Users,
  Star,
  Rocket,
  ShieldCheck,
  Truck,
  Phone,
  Mail,
  Loader2,
} from "lucide-react";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = JSON.parse(localStorage.getItem("products")) || [];
      setProducts(allProducts);
      setIsLoading(false);
    };

    fetchProducts();
  }, []);
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2000&auto=format&fit=crop"
          alt="Hero Background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="relative z-10 h-full container mx-auto px-6 lg:px-16 flex flex-col justify-center">
          <Badge className="mb-4 px-4 py-1 rounded-full">Welcome</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
            Discover Products That Inspire Your Lifestyle
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            Shop the latest trends with unmatched quality and fast delivery.
            Experience shopping made simple and delightful.
          </p>
          <div className="mt-6 flex gap-3">
            <Button size="lg" className="rounded-2xl">
              Shop Now
            </Button>
            <Button size="lg" variant="outline" className="rounded-2xl">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="container mx-auto px-6 lg:px-16 py-16">
        <h2 className="text-3xl font-semibold mb-8">Featured Categories</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Fashion",
              desc: "Trendy outfits that fit every occasion.",
              img: "https://images.unsplash.com/photo-1521334884684-d80222895322?q=80&w=800&auto=format&fit=crop",
            },
            {
              title: "Electronics",
              desc: "Smart gadgets for your modern lifestyle.",
              img: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=800&auto=format&fit=crop",
            },
            {
              title: "Home Essentials",
              desc: "Everything you need to make home comfortable.",
              img: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=800&auto=format&fit=crop",
            },
          ].map((cat, i) => (
            <Card key={i} className="rounded-3xl overflow-hidden pt-0">
              <img
                src={cat.img}
                alt={cat.title}
                className="h-48 w-full object-cover"
              />
              <CardHeader>
                <CardTitle>{cat.title}</CardTitle>
                <CardDescription>{cat.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="container mx-auto px-6 lg:px-16 py-12">
        <h2 className="text-3xl font-semibold mb-8">Best Sellers</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products && products.length > 0 ? (
            products.slice(0, 4).map((product) => (
              <Card key={product.id} className="rounded-3xl pb-2 pt-0">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="h-40 w-full object-cover rounded-t-3xl"
                />
                <CardContent className="p-4">
                  <h3 className="font-semibold">{product.title}</h3>
                  <p
                    className="text-sm text-muted-foreground"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "normal",
                      minHeight: "2.5em",
                    }}
                  >
                    {product.description}
                  </p>
                  <div className="text-orange-400 text-sm mb-1">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <span
                          key={i}
                          className={
                            i < product.rating
                              ? "text-orange-400"
                              : "text-gray-400"
                          }
                        >
                          ★
                        </span>
                      ))}
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <span className="font-bold">${product.price}</span>
                    <Button
                      size=""
                      className="rounded-lg"
                      onClick={() => {
                        const loggedInUser = JSON.parse(
                          localStorage.getItem("loggedInUser")
                        );
                        if (!loggedInUser) {
                          window.location.href = "/login";
                          return;
                        }

                        const cartItems =
                          JSON.parse(localStorage.getItem("cartItems")) || [];
                        const productExists = cartItems.find(
                          (item) => item.id === product.id
                        );

                        if (productExists) {
                          productExists.quantity += 1;
                        } else {
                          cartItems.push({
                            id: product.id,
                            title: product.title,
                            price: product.price,
                            images: product.images,
                            quantity: 1,
                          });
                        }

                        localStorage.setItem(
                          "cartItems",
                          JSON.stringify(cartItems)
                        );
                        window.dispatchEvent(new Event("cartUpdated"));
                      }}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-muted-foreground">No products available.</p>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Why Choose Us
          </h2>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                icon: Truck,
                title: "Fast Delivery",
                desc: "Quick, reliable shipping across the country.",
              },
              {
                icon: ShieldCheck,
                title: "Secure Payments",
                desc: "Trusted payment gateways with buyer protection.",
              },
              {
                icon: Star,
                title: "Top Quality",
                desc: "Carefully curated, best-in-class products.",
              },
              {
                icon: Users,
                title: "Customer Support",
                desc: "24/7 support to assist with your needs.",
              },
            ].map((f, i) => (
              <Card key={i} className="rounded-3xl text-center p-6">
                <f.icon className="mx-auto h-8 w-8 mb-3" />
                <CardTitle>{f.title}</CardTitle>
                <CardDescription>{f.desc}</CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-6 lg:px-16 py-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          What Our Customers Say
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="rounded-3xl">
              <CardContent className="p-6 flex flex-col gap-4">
                <Quote className="h-6 w-6 text-muted-foreground" />
                <p className="text-muted-foreground">
                  “Amazing service! The product quality exceeded my
                  expectations. Definitely shopping again.”
                </p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage
                      src={`https://i.pravatar.cc/100?img=${i + 5}`}
                    />
                    <AvatarFallback>U{i}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Customer {i}</p>
                    <p className="text-sm text-muted-foreground">
                      Verified Buyer
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-muted/30 py-12">
        <div className="container mx-auto px-6 lg:px-16 grid md:grid-cols-[2fr_1fr] gap-6 items-center">
          <div>
            <h2 className="text-2xl font-semibold">Stay Updated</h2>
            <p className="text-muted-foreground mt-2">
              Join our newsletter to receive exclusive deals and the latest
              news.
            </p>
            <div className="mt-4 flex gap-3">
              <Input placeholder="Your Email" className="rounded-xl" />
              <Button className="rounded-xl">Subscribe</Button>
            </div>
          </div>
          <div className="hidden md:flex justify-end">
            <Rocket className="h-20 w-20 text-primary" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-10 mt-12">
        <div className="container mx-auto px-6 lg:px-16 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg">YourCompany</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Delivering quality products with trust and care.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>About Us</li>
              <li>Products</li>
              <li>FAQs</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-3">Contact Us</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> +92 300 0000000
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> hello@yourcompany.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
