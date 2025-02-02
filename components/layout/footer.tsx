'use client';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">EduLien</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Connecting education worldwide
            </p>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} EduLien. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
