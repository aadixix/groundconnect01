import React from "react";
import {
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
  Copy
} from "lucide-react";

// Client component for copy functionality only
const CopyButton = ({ url, title }) => {
  return (
    <>
      <button
        className="copy-btn w-10 h-10 bg-gray-600 hover:bg-gray-700 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-md hover:shadow-lg"
        aria-label="Copy link"
        title="Copy link to clipboard"
        data-url={url}
      >
        <Copy className="w-4 h-4" />
      </button>

      <script dangerouslySetInnerHTML={{
        __html: `
          (function() {
            if (typeof window === 'undefined') return;
            
            function initCopyButton() {
              const copyBtn = document.querySelector('.copy-btn');
              if (!copyBtn) return;
              
              copyBtn.addEventListener('click', async function() {
                const urlToCopy = this.dataset.url || window.location.href;
                
                try {
                  if (navigator.clipboard) {
                    await navigator.clipboard.writeText(urlToCopy);
                  } else {
                    // Fallback
                    const textArea = document.createElement('textarea');
                    textArea.value = urlToCopy;
                    textArea.style.position = 'fixed';
                    textArea.style.left = '-999999px';
                    document.body.appendChild(textArea);
                    textArea.select();
                    document.execCommand('copy');
                    document.body.removeChild(textArea);
                  }
                  
                  // Visual feedback
                  const originalClass = this.className;
                  const originalHTML = this.innerHTML;
                  
                  this.className = originalClass.replace('bg-gray-600', 'bg-green-600').replace('hover:bg-gray-700', 'hover:bg-green-700');
                  this.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>';
                  this.setAttribute('aria-label', 'Copied!');
                  
                  setTimeout(() => {
                    this.className = originalClass;
                    this.innerHTML = originalHTML;
                    this.setAttribute('aria-label', 'Copy link');
                  }, 2000);
                  
                } catch (err) {
                  console.error('Copy failed:', err);
                }
              });
            }
            
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', initCopyButton);
            } else {
              initCopyButton();
            }
          })();
        `
      }} />
    </>
  );
};

const Share = ({ title = "Check this out!", url = "" }) => {
  const shareUrl = url || "";

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(title + " " + shareUrl)}`,
  };

  return (
    <div className="border-t border-gray-200 pt-8 mb-8">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-800">
          <Share2 className="w-5 h-5" />
          Share this article
        </h3>
        <div className="flex items-center gap-3">
          {/* Facebook */}
          <a
            href={shareLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-200 hover:scale-110 shadow-md hover:shadow-lg"
            aria-label="Share on Facebook"
          >
            <Facebook className="w-4 h-4" />
          </a>

          {/* Twitter */}
          <a
            href={shareLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition-all duration-200 hover:scale-110 shadow-md hover:shadow-lg"
            aria-label="Share on Twitter"
          >
            <Twitter className="w-4 h-4" />
          </a>

          {/* LinkedIn */}
          <a
            href={shareLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-all duration-200 hover:scale-110 shadow-md hover:shadow-lg"
            aria-label="Share on LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          {/* WhatsApp */}
          <a
            href={shareLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-all duration-200 hover:scale-110 shadow-md hover:shadow-lg"
            aria-label="Share on WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          {/* Copy Link Button - Enhanced with vanilla JS */}
          <CopyButton url={shareUrl} title={title} />
        </div>
      </div>
    </div>
  );
};

export default Share;
