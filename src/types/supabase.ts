export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      aggregator_api_keys: {
        Row: {
          aggregator_id: string
          api_key: string
          created_at: string | null
          environment: string
          id: number
          is_active: boolean | null
        }
        Insert: {
          aggregator_id: string
          api_key: string
          created_at?: string | null
          environment: string
          id?: number
          is_active?: boolean | null
        }
        Update: {
          aggregator_id?: string
          api_key?: string
          created_at?: string | null
          environment?: string
          id?: number
          is_active?: boolean | null
        }
        Relationships: []
      }
      aggregator_rsa_requests: {
        Row: {
          aggregator_id: string | null
          amount_in_words: string | null
          base_plan_amount: number | null
          cgst_amount: number | null
          chassis_number: string
          created_at: string | null
          customer_address: string | null
          customer_city: string | null
          customer_email: string | null
          customer_first_name: string
          customer_last_name: string
          customer_phone: string
          customer_postcode: string | null
          customer_state: string | null
          customer_whatsapp: string | null
          dealer_name: string | null
          dealer_oem: string | null
          end_date: string
          engine_number: string
          error_message: string | null
          fuel_type: string | null
          id: string
          igst_amount: number | null
          plan_duration_years: number
          plan_name: string
          policy_number: string
          request_payload: Json
          sgst_amount: number | null
          start_date: string
          status: string | null
          total_plan_amount: number | null
          vehicle_model: string
          vehicle_registration_number: string | null
        }
        Insert: {
          aggregator_id?: string | null
          amount_in_words?: string | null
          base_plan_amount?: number | null
          cgst_amount?: number | null
          chassis_number: string
          created_at?: string | null
          customer_address?: string | null
          customer_city?: string | null
          customer_email?: string | null
          customer_first_name: string
          customer_last_name: string
          customer_phone: string
          customer_postcode?: string | null
          customer_state?: string | null
          customer_whatsapp?: string | null
          dealer_name?: string | null
          dealer_oem?: string | null
          end_date: string
          engine_number: string
          error_message?: string | null
          fuel_type?: string | null
          id?: string
          igst_amount?: number | null
          plan_duration_years: number
          plan_name: string
          policy_number: string
          request_payload: Json
          sgst_amount?: number | null
          start_date: string
          status?: string | null
          total_plan_amount?: number | null
          vehicle_model: string
          vehicle_registration_number?: string | null
        }
        Update: {
          aggregator_id?: string | null
          amount_in_words?: string | null
          base_plan_amount?: number | null
          cgst_amount?: number | null
          chassis_number?: string
          created_at?: string | null
          customer_address?: string | null
          customer_city?: string | null
          customer_email?: string | null
          customer_first_name?: string
          customer_last_name?: string
          customer_phone?: string
          customer_postcode?: string | null
          customer_state?: string | null
          customer_whatsapp?: string | null
          dealer_name?: string | null
          dealer_oem?: string | null
          end_date?: string
          engine_number?: string
          error_message?: string | null
          fuel_type?: string | null
          id?: string
          igst_amount?: number | null
          plan_duration_years?: number
          plan_name?: string
          policy_number?: string
          request_payload?: Json
          sgst_amount?: number | null
          start_date?: string
          status?: string | null
          total_plan_amount?: number | null
          vehicle_model?: string
          vehicle_registration_number?: string | null
        }
        Relationships: []
      }
      approval_flows: {
        Row: {
          approval_type_id: string
          created_at: string | null
          id: string
          is_final: boolean | null
          role_required: string
          step_name: string | null
          step_number: number
        }
        Insert: {
          approval_type_id: string
          created_at?: string | null
          id?: string
          is_final?: boolean | null
          role_required: string
          step_name?: string | null
          step_number: number
        }
        Update: {
          approval_type_id?: string
          created_at?: string | null
          id?: string
          is_final?: boolean | null
          role_required?: string
          step_name?: string | null
          step_number?: number
        }
        Relationships: [
          {
            foreignKeyName: "approval_flows_approval_type_id_fkey"
            columns: ["approval_type_id"]
            isOneToOne: false
            referencedRelation: "approval_types"
            referencedColumns: ["id"]
          },
        ]
      }
      approval_instances: {
        Row: {
          approval_type_id: string | null
          created_at: string | null
          current_step: number | null
          id: string
          metadata: Json | null
          reference_id: string
          requested_by: string | null
          status: string | null
        }
        Insert: {
          approval_type_id?: string | null
          created_at?: string | null
          current_step?: number | null
          id?: string
          metadata?: Json | null
          reference_id: string
          requested_by?: string | null
          status?: string | null
        }
        Update: {
          approval_type_id?: string | null
          created_at?: string | null
          current_step?: number | null
          id?: string
          metadata?: Json | null
          reference_id?: string
          requested_by?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "approval_instances_approval_type_id_fkey"
            columns: ["approval_type_id"]
            isOneToOne: false
            referencedRelation: "approval_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "approval_instances_requested_by_fkey"
            columns: ["requested_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
        ]
      }
      approval_steps: {
        Row: {
          assigned_to: string | null
          comment: string | null
          id: string
          instance_id: string | null
          performed_at: string | null
          performed_by: string | null
          role: string | null
          status: string | null
          step_number: number | null
        }
        Insert: {
          assigned_to?: string | null
          comment?: string | null
          id?: string
          instance_id?: string | null
          performed_at?: string | null
          performed_by?: string | null
          role?: string | null
          status?: string | null
          step_number?: number | null
        }
        Update: {
          assigned_to?: string | null
          comment?: string | null
          id?: string
          instance_id?: string | null
          performed_at?: string | null
          performed_by?: string | null
          role?: string | null
          status?: string | null
          step_number?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "approval_steps_assigned_to_fkey"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "approval_steps_instance_id_fkey"
            columns: ["instance_id"]
            isOneToOne: false
            referencedRelation: "approval_instances"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "approval_steps_performed_by_fkey"
            columns: ["performed_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
        ]
      }
      approval_types: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          name: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      approvals: {
        Row: {
          approval_comment: string | null
          approval_status: string | null
          assigned_to: string
          created_at: string | null
          id: string
          is_archived: boolean | null
          metadata: Json | null
          reference_id: string
          request_type_id: string
          requested_by: string
          step_number: number | null
          updated_at: string | null
        }
        Insert: {
          approval_comment?: string | null
          approval_status?: string | null
          assigned_to: string
          created_at?: string | null
          id?: string
          is_archived?: boolean | null
          metadata?: Json | null
          reference_id: string
          request_type_id: string
          requested_by: string
          step_number?: number | null
          updated_at?: string | null
        }
        Update: {
          approval_comment?: string | null
          approval_status?: string | null
          assigned_to?: string
          created_at?: string | null
          id?: string
          is_archived?: boolean | null
          metadata?: Json | null
          reference_id?: string
          request_type_id?: string
          requested_by?: string
          step_number?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "approvals_assigned_to_fkey"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "approvals_request_type_id_fkey"
            columns: ["request_type_id"]
            isOneToOne: false
            referencedRelation: "approval_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "approvals_requested_by_fkey"
            columns: ["requested_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_logs: {
        Row: {
          action: string
          created_at: string | null
          entity_type: string
          id: string
          performed_by: string
          reference_id: string
          remarks: string | null
        }
        Insert: {
          action: string
          created_at?: string | null
          entity_type: string
          id?: string
          performed_by: string
          reference_id: string
          remarks?: string | null
        }
        Update: {
          action?: string
          created_at?: string | null
          entity_type?: string
          id?: string
          performed_by?: string
          reference_id?: string
          remarks?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "audit_logs_performed_by_fkey"
            columns: ["performed_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
        ]
      }
      bike_models: {
        Row: {
          brand: string
          created_at: string | null
          id: string
          is_active: boolean | null
          model_name: string
        }
        Insert: {
          brand: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          model_name: string
        }
        Update: {
          brand?: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          model_name?: string
        }
        Relationships: []
      }
      call_logs: {
        Row: {
          clid: string
          company_id: string | null
          created_at: string | null
          customer_email: string | null
          customer_id: string | null
          customer_name: string | null
          customer_phone: string | null
          customer_whatsapp: string | null
          id: number
          input: string | null
          node_id: string | null
          plan_status: string | null
          plan_type: string | null
          policy_number: string | null
          timestamp: string
          uid: string
          valid_till: string | null
          vehicle_number: string | null
        }
        Insert: {
          clid: string
          company_id?: string | null
          created_at?: string | null
          customer_email?: string | null
          customer_id?: string | null
          customer_name?: string | null
          customer_phone?: string | null
          customer_whatsapp?: string | null
          id?: number
          input?: string | null
          node_id?: string | null
          plan_status?: string | null
          plan_type?: string | null
          policy_number?: string | null
          timestamp: string
          uid: string
          valid_till?: string | null
          vehicle_number?: string | null
        }
        Update: {
          clid?: string
          company_id?: string | null
          created_at?: string | null
          customer_email?: string | null
          customer_id?: string | null
          customer_name?: string | null
          customer_phone?: string | null
          customer_whatsapp?: string | null
          id?: number
          input?: string | null
          node_id?: string | null
          plan_status?: string | null
          plan_type?: string | null
          policy_number?: string | null
          timestamp?: string
          uid?: string
          valid_till?: string | null
          vehicle_number?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "call_logs_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      contact: {
        Row: {
          created_at: string
          email: string | null
          first_name: string | null
          id: string
          last_name: string | null
          message: string | null
          phone: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          message?: string | null
          phone?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          message?: string | null
          phone?: string | null
        }
        Relationships: []
      }
      customer_logins: {
        Row: {
          created_at: string | null
          customer_id: string
          id: string
          otp_verified: boolean
          password_hash: string
          phone: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          customer_id: string
          id?: string
          otp_verified?: boolean
          password_hash: string
          phone: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          customer_id?: string
          id?: string
          otp_verified?: boolean
          password_hash?: string
          phone?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customer_logins_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      customer_onboard_form_log: {
        Row: {
          created_at: string
          data: Json | null
          full_name: string | null
          id: string
          req_body: Json | null
        }
        Insert: {
          created_at?: string
          data?: Json | null
          full_name?: string | null
          id?: string
          req_body?: Json | null
        }
        Update: {
          created_at?: string
          data?: Json | null
          full_name?: string | null
          id?: string
          req_body?: Json | null
        }
        Relationships: []
      }
      customer_payment_links: {
        Row: {
          amount: number
          attempt_number: number
          created_at: string
          currency: string
          customer_email: string
          customer_name: string
          customer_phone: string
          dealer_id: string
          description: string | null
          expires_at: string
          id: string
          last_sent_at: string
          paid_at: string | null
          payment_link_url: string
          plan_id: string
          plan_name: string
          razorpay_order_id: string | null
          razorpay_payment_id: string | null
          razorpay_payment_link_id: string
          razorpay_signature: string | null
          reference_id: string
          rsa_plan_sales_id: string | null
          short_url: string
          status: string
          updated_at: string
          wallet_transaction_id: string | null
        }
        Insert: {
          amount: number
          attempt_number?: number
          created_at?: string
          currency?: string
          customer_email: string
          customer_name: string
          customer_phone: string
          dealer_id: string
          description?: string | null
          expires_at: string
          id?: string
          last_sent_at?: string
          paid_at?: string | null
          payment_link_url: string
          plan_id: string
          plan_name: string
          razorpay_order_id?: string | null
          razorpay_payment_id?: string | null
          razorpay_payment_link_id: string
          razorpay_signature?: string | null
          reference_id: string
          rsa_plan_sales_id?: string | null
          short_url: string
          status?: string
          updated_at?: string
          wallet_transaction_id?: string | null
        }
        Update: {
          amount?: number
          attempt_number?: number
          created_at?: string
          currency?: string
          customer_email?: string
          customer_name?: string
          customer_phone?: string
          dealer_id?: string
          description?: string | null
          expires_at?: string
          id?: string
          last_sent_at?: string
          paid_at?: string | null
          payment_link_url?: string
          plan_id?: string
          plan_name?: string
          razorpay_order_id?: string | null
          razorpay_payment_id?: string | null
          razorpay_payment_link_id?: string
          razorpay_signature?: string | null
          reference_id?: string
          rsa_plan_sales_id?: string | null
          short_url?: string
          status?: string
          updated_at?: string
          wallet_transaction_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customer_payment_links_dealer_id_fkey"
            columns: ["dealer_id"]
            isOneToOne: false
            referencedRelation: "dealers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "customer_payment_links_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "dealer_config_plans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "customer_payment_links_rsa_plan_sales_id_fkey"
            columns: ["rsa_plan_sales_id"]
            isOneToOne: false
            referencedRelation: "rsa_plan_sales"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "customer_payment_links_wallet_transaction_id_fkey"
            columns: ["wallet_transaction_id"]
            isOneToOne: false
            referencedRelation: "wallet_transactions"
            referencedColumns: ["id"]
          },
        ]
      }
      customers: {
        Row: {
          address: string | null
          agreed_terms: boolean
          authorized_data_sharing: boolean
          city: string | null
          consent_service_updates: boolean
          created_at: string | null
          dealer_id: string | null
          district: string | null
          dob: string | null
          email: string | null
          first_name: string
          gender: string | null
          id: string
          last_name: string
          nominee_dob: string | null
          nominee_name: string | null
          nominee_relationship: string | null
          phone: string | null
          postcode: string | null
          preferred_communication: string[] | null
          state: string | null
          whatsapp_number: string | null
        }
        Insert: {
          address?: string | null
          agreed_terms?: boolean
          authorized_data_sharing?: boolean
          city?: string | null
          consent_service_updates?: boolean
          created_at?: string | null
          dealer_id?: string | null
          district?: string | null
          dob?: string | null
          email?: string | null
          first_name: string
          gender?: string | null
          id?: string
          last_name: string
          nominee_dob?: string | null
          nominee_name?: string | null
          nominee_relationship?: string | null
          phone?: string | null
          postcode?: string | null
          preferred_communication?: string[] | null
          state?: string | null
          whatsapp_number?: string | null
        }
        Update: {
          address?: string | null
          agreed_terms?: boolean
          authorized_data_sharing?: boolean
          city?: string | null
          consent_service_updates?: boolean
          created_at?: string | null
          dealer_id?: string | null
          district?: string | null
          dob?: string | null
          email?: string | null
          first_name?: string
          gender?: string | null
          id?: string
          last_name?: string
          nominee_dob?: string | null
          nominee_name?: string | null
          nominee_relationship?: string | null
          phone?: string | null
          postcode?: string | null
          preferred_communication?: string[] | null
          state?: string | null
          whatsapp_number?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customers_dealer_id_fkey"
            columns: ["dealer_id"]
            isOneToOne: false
            referencedRelation: "dealers"
            referencedColumns: ["id"]
          },
        ]
      }
      dealer_commission_invoices: {
        Row: {
          created_at: string
          dealer_id: string | null
          doc_amount: number | null
          doc_date: string | null
          doc_desc: string | null
          doc_number: string | null
          doc_type: string | null
          file: string | null
          id: string
          other_reason: string | null
          status: string | null
        }
        Insert: {
          created_at?: string
          dealer_id?: string | null
          doc_amount?: number | null
          doc_date?: string | null
          doc_desc?: string | null
          doc_number?: string | null
          doc_type?: string | null
          file?: string | null
          id?: string
          other_reason?: string | null
          status?: string | null
        }
        Update: {
          created_at?: string
          dealer_id?: string | null
          doc_amount?: number | null
          doc_date?: string | null
          doc_desc?: string | null
          doc_number?: string | null
          doc_type?: string | null
          file?: string | null
          id?: string
          other_reason?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "dealer_commission_invoices_dealer_id_fkey"
            columns: ["dealer_id"]
            isOneToOne: false
            referencedRelation: "dealers"
            referencedColumns: ["id"]
          },
        ]
      }
      dealer_config_plans: {
        Row: {
          created_at: string | null
          created_by: string | null
          custom_price: number
          dealer_id: string
          dealer_share: number
          id: string
          rsa_plan_id: string
          sda_share: number
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          custom_price: number
          dealer_id: string
          dealer_share: number
          id?: string
          rsa_plan_id: string
          sda_share: number
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          custom_price?: number
          dealer_id?: string
          dealer_share?: number
          id?: string
          rsa_plan_id?: string
          sda_share?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "dealer_config_plans_dealer_id_fkey"
            columns: ["dealer_id"]
            isOneToOne: false
            referencedRelation: "dealers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "dealer_config_plans_rsa_plan_id_fkey"
            columns: ["rsa_plan_id"]
            isOneToOne: false
            referencedRelation: "rsa_base_plans"
            referencedColumns: ["id"]
          },
        ]
      }
      dealer_documents: {
        Row: {
          additional_docs: Json | null
          address_proof: string | null
          dealer_id: string | null
          gst_certificate: string | null
          id: string
          incorporation_certificate: string | null
          pan_card_file: string | null
        }
        Insert: {
          additional_docs?: Json | null
          address_proof?: string | null
          dealer_id?: string | null
          gst_certificate?: string | null
          id?: string
          incorporation_certificate?: string | null
          pan_card_file?: string | null
        }
        Update: {
          additional_docs?: Json | null
          address_proof?: string | null
          dealer_id?: string | null
          gst_certificate?: string | null
          id?: string
          incorporation_certificate?: string | null
          pan_card_file?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "dealer_documents_dealer_id_fkey"
            columns: ["dealer_id"]
            isOneToOne: false
            referencedRelation: "dealers"
            referencedColumns: ["id"]
          },
        ]
      }
      dealer_employees: {
        Row: {
          contact_number: string | null
          created_at: string | null
          dealer_id: string
          email: string | null
          employee_id: string
          id: string
          login_enabled: boolean | null
          name: string
          password: string
          role: string | null
          updated_at: string | null
        }
        Insert: {
          contact_number?: string | null
          created_at?: string | null
          dealer_id: string
          email?: string | null
          employee_id: string
          id?: string
          login_enabled?: boolean | null
          name: string
          password: string
          role?: string | null
          updated_at?: string | null
        }
        Update: {
          contact_number?: string | null
          created_at?: string | null
          dealer_id?: string
          email?: string | null
          employee_id?: string
          id?: string
          login_enabled?: boolean | null
          name?: string
          password?: string
          role?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "dealer_employees_dealer_id_fkey"
            columns: ["dealer_id"]
            isOneToOne: false
            referencedRelation: "dealers"
            referencedColumns: ["id"]
          },
        ]
      }
      dealer_finance_info: {
        Row: {
          account_holder_name: string | null
          account_number: string | null
          bank_name: string | null
          cancelled_cheque_file: string | null
          dealer_id: string | null
          finance_contact_email: string | null
          finance_contact_name: string | null
          finance_contact_phone: string | null
          id: string
          ifsc_code: string | null
        }
        Insert: {
          account_holder_name?: string | null
          account_number?: string | null
          bank_name?: string | null
          cancelled_cheque_file?: string | null
          dealer_id?: string | null
          finance_contact_email?: string | null
          finance_contact_name?: string | null
          finance_contact_phone?: string | null
          id?: string
          ifsc_code?: string | null
        }
        Update: {
          account_holder_name?: string | null
          account_number?: string | null
          bank_name?: string | null
          cancelled_cheque_file?: string | null
          dealer_id?: string | null
          finance_contact_email?: string | null
          finance_contact_name?: string | null
          finance_contact_phone?: string | null
          id?: string
          ifsc_code?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "dealer_finance_info_dealer_id_fkey"
            columns: ["dealer_id"]
            isOneToOne: false
            referencedRelation: "dealers"
            referencedColumns: ["id"]
          },
        ]
      }
      dealer_reset_tokens: {
        Row: {
          created_at: string | null
          dealer_id: string
          expires_at: string
          id: string
          token: string
        }
        Insert: {
          created_at?: string | null
          dealer_id: string
          expires_at: string
          id?: string
          token: string
        }
        Update: {
          created_at?: string | null
          dealer_id?: string
          expires_at?: string
          id?: string
          token?: string
        }
        Relationships: [
          {
            foreignKeyName: "dealer_reset_tokens_dealer_id_fkey"
            columns: ["dealer_id"]
            isOneToOne: false
            referencedRelation: "dealers"
            referencedColumns: ["id"]
          },
        ]
      }
      dealer_rsa_pricing: {
        Row: {
          base_dealer_share: number
          created_at: string | null
          created_by: string | null
          custom_price: number
          dealer_id: string
          extra_margin: number | null
          id: string
          rsa_plan_id: string
          sda_share: number
          total_dealer_share: number | null
          updated_at: string | null
        }
        Insert: {
          base_dealer_share: number
          created_at?: string | null
          created_by?: string | null
          custom_price: number
          dealer_id: string
          extra_margin?: number | null
          id?: string
          rsa_plan_id: string
          sda_share: number
          total_dealer_share?: number | null
          updated_at?: string | null
        }
        Update: {
          base_dealer_share?: number
          created_at?: string | null
          created_by?: string | null
          custom_price?: number
          dealer_id?: string
          extra_margin?: number | null
          id?: string
          rsa_plan_id?: string
          sda_share?: number
          total_dealer_share?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "dealer_rsa_pricing_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "dealer_rsa_pricing_dealer_id_fkey"
            columns: ["dealer_id"]
            isOneToOne: false
            referencedRelation: "dealers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "dealer_rsa_pricing_rsa_plan_id_fkey"
            columns: ["rsa_plan_id"]
            isOneToOne: false
            referencedRelation: "rsa_plans"
            referencedColumns: ["id"]
          },
        ]
      }
      dealer_sales_invoices: {
        Row: {
          created_at: string
          dealer_id: string | null
          end_date: string | null
          id: string
          invoice_number: string | null
          start_date: string | null
          total_amount: number | null
        }
        Insert: {
          created_at?: string
          dealer_id?: string | null
          end_date?: string | null
          id?: string
          invoice_number?: string | null
          start_date?: string | null
          total_amount?: number | null
        }
        Update: {
          created_at?: string
          dealer_id?: string | null
          end_date?: string | null
          id?: string
          invoice_number?: string | null
          start_date?: string | null
          total_amount?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "dealer_sales_commission_dealer_id_fkey"
            columns: ["dealer_id"]
            isOneToOne: false
            referencedRelation: "dealers"
            referencedColumns: ["id"]
          },
        ]
      }
      dealer_services: {
        Row: {
          additional_price: number | null
          day_charge: number | null
          dealer_id: string | null
          fixed_distance_charge: number | null
          id: string
          night_charge: number | null
          service_name: string | null
        }
        Insert: {
          additional_price?: number | null
          day_charge?: number | null
          dealer_id?: string | null
          fixed_distance_charge?: number | null
          id?: string
          night_charge?: number | null
          service_name?: string | null
        }
        Update: {
          additional_price?: number | null
          day_charge?: number | null
          dealer_id?: string | null
          fixed_distance_charge?: number | null
          id?: string
          night_charge?: number | null
          service_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "dealer_services_dealer_id_fkey"
            columns: ["dealer_id"]
            isOneToOne: false
            referencedRelation: "dealers"
            referencedColumns: ["id"]
          },
        ]
      }
      dealer_sub_dealerships: {
        Row: {
          address: string | null
          contact: string | null
          dealer_id: string | null
          id: string
          name: string | null
          oem: string | null
          status: string | null
        }
        Insert: {
          address?: string | null
          contact?: string | null
          dealer_id?: string | null
          id?: string
          name?: string | null
          oem?: string | null
          status?: string | null
        }
        Update: {
          address?: string | null
          contact?: string | null
          dealer_id?: string | null
          id?: string
          name?: string | null
          oem?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "dealer_sub_dealerships_dealer_id_fkey"
            columns: ["dealer_id"]
            isOneToOne: false
            referencedRelation: "dealers"
            referencedColumns: ["id"]
          },
        ]
      }
      dealers: {
        Row: {
          agreement_url: string | null
          available_days: string[] | null
          city: string | null
          created_at: string | null
          created_by: string | null
          dealer_id: string | null
          dealership_name: string | null
          dealership_type: string | null
          designation: string | null
          email: string | null
          entity_type: string | null
          escalation_contact: string | null
          escalation_email: string | null
          escalation_name: string | null
          gps_location: string | null
          gst_number: string | null
          id: string
          is_contact_verified: boolean | null
          is_email_verified: boolean | null
          is_master_dealer: boolean | null
          is_sub_dealer: boolean | null
          login_enabled: boolean | null
          manager_contact: string | null
          manager_name: string | null
          msme_number: string | null
          oem: string[] | null
          operation_location: string | null
          operations_contact_name: string | null
          operations_contact_phone: string | null
          owner_contact: string | null
          owner_email: string | null
          owner_name: string | null
          pan_number: string | null
          parent_dealer_id: string | null
          password: string | null
          pincode: string | null
          price_list_file: string | null
          razorpayx_contact_id: string | null
          registered_address: string | null
          repair_on_site: boolean | null
          state: string | null
          status: string | null
          time_end: string | null
          time_start: string | null
          updated_at: string | null
          vehicle_types: string[] | null
        }
        Insert: {
          agreement_url?: string | null
          available_days?: string[] | null
          city?: string | null
          created_at?: string | null
          created_by?: string | null
          dealer_id?: string | null
          dealership_name?: string | null
          dealership_type?: string | null
          designation?: string | null
          email?: string | null
          entity_type?: string | null
          escalation_contact?: string | null
          escalation_email?: string | null
          escalation_name?: string | null
          gps_location?: string | null
          gst_number?: string | null
          id?: string
          is_contact_verified?: boolean | null
          is_email_verified?: boolean | null
          is_master_dealer?: boolean | null
          is_sub_dealer?: boolean | null
          login_enabled?: boolean | null
          manager_contact?: string | null
          manager_name?: string | null
          msme_number?: string | null
          oem?: string[] | null
          operation_location?: string | null
          operations_contact_name?: string | null
          operations_contact_phone?: string | null
          owner_contact?: string | null
          owner_email?: string | null
          owner_name?: string | null
          pan_number?: string | null
          parent_dealer_id?: string | null
          password?: string | null
          pincode?: string | null
          price_list_file?: string | null
          razorpayx_contact_id?: string | null
          registered_address?: string | null
          repair_on_site?: boolean | null
          state?: string | null
          status?: string | null
          time_end?: string | null
          time_start?: string | null
          updated_at?: string | null
          vehicle_types?: string[] | null
        }
        Update: {
          agreement_url?: string | null
          available_days?: string[] | null
          city?: string | null
          created_at?: string | null
          created_by?: string | null
          dealer_id?: string | null
          dealership_name?: string | null
          dealership_type?: string | null
          designation?: string | null
          email?: string | null
          entity_type?: string | null
          escalation_contact?: string | null
          escalation_email?: string | null
          escalation_name?: string | null
          gps_location?: string | null
          gst_number?: string | null
          id?: string
          is_contact_verified?: boolean | null
          is_email_verified?: boolean | null
          is_master_dealer?: boolean | null
          is_sub_dealer?: boolean | null
          login_enabled?: boolean | null
          manager_contact?: string | null
          manager_name?: string | null
          msme_number?: string | null
          oem?: string[] | null
          operation_location?: string | null
          operations_contact_name?: string | null
          operations_contact_phone?: string | null
          owner_contact?: string | null
          owner_email?: string | null
          owner_name?: string | null
          pan_number?: string | null
          parent_dealer_id?: string | null
          password?: string | null
          pincode?: string | null
          price_list_file?: string | null
          razorpayx_contact_id?: string | null
          registered_address?: string | null
          repair_on_site?: boolean | null
          state?: string | null
          status?: string | null
          time_end?: string | null
          time_start?: string | null
          updated_at?: string | null
          vehicle_types?: string[] | null
        }
        Relationships: [
          {
            foreignKeyName: "dealers_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "dealers_parent_dealer_id_fkey"
            columns: ["parent_dealer_id"]
            isOneToOne: false
            referencedRelation: "dealers"
            referencedColumns: ["id"]
          },
        ]
      }
      dealers_backup: {
        Row: {
          agreement_url: string | null
          available_days: string[] | null
          city: string | null
          created_at: string | null
          created_by: string | null
          dealer_id: string | null
          dealership_name: string | null
          dealership_type: string | null
          designation: string | null
          email: string | null
          entity_type: string | null
          escalation_contact: string | null
          escalation_email: string | null
          escalation_name: string | null
          gps_location: string | null
          gst_number: string | null
          id: string
          is_contact_verified: boolean | null
          is_email_verified: boolean | null
          is_master_dealer: boolean | null
          is_sub_dealer: boolean | null
          login_enabled: boolean | null
          manager_contact: string | null
          manager_name: string | null
          msme_number: string | null
          oem: string | null
          operation_location: string | null
          operations_contact_name: string | null
          operations_contact_phone: string | null
          owner_contact: string | null
          owner_email: string | null
          owner_name: string | null
          pan_number: string | null
          parent_dealer_id: string | null
          password: string | null
          pincode: string | null
          price_list_file: string | null
          razorpayx_contact_id: string | null
          registered_address: string | null
          repair_on_site: boolean | null
          state: string | null
          status: string | null
          time_end: string | null
          time_start: string | null
          updated_at: string | null
          vehicle_types: string[] | null
        }
        Insert: {
          agreement_url?: string | null
          available_days?: string[] | null
          city?: string | null
          created_at?: string | null
          created_by?: string | null
          dealer_id?: string | null
          dealership_name?: string | null
          dealership_type?: string | null
          designation?: string | null
          email?: string | null
          entity_type?: string | null
          escalation_contact?: string | null
          escalation_email?: string | null
          escalation_name?: string | null
          gps_location?: string | null
          gst_number?: string | null
          id: string
          is_contact_verified?: boolean | null
          is_email_verified?: boolean | null
          is_master_dealer?: boolean | null
          is_sub_dealer?: boolean | null
          login_enabled?: boolean | null
          manager_contact?: string | null
          manager_name?: string | null
          msme_number?: string | null
          oem?: string | null
          operation_location?: string | null
          operations_contact_name?: string | null
          operations_contact_phone?: string | null
          owner_contact?: string | null
          owner_email?: string | null
          owner_name?: string | null
          pan_number?: string | null
          parent_dealer_id?: string | null
          password?: string | null
          pincode?: string | null
          price_list_file?: string | null
          razorpayx_contact_id?: string | null
          registered_address?: string | null
          repair_on_site?: boolean | null
          state?: string | null
          status?: string | null
          time_end?: string | null
          time_start?: string | null
          updated_at?: string | null
          vehicle_types?: string[] | null
        }
        Update: {
          agreement_url?: string | null
          available_days?: string[] | null
          city?: string | null
          created_at?: string | null
          created_by?: string | null
          dealer_id?: string | null
          dealership_name?: string | null
          dealership_type?: string | null
          designation?: string | null
          email?: string | null
          entity_type?: string | null
          escalation_contact?: string | null
          escalation_email?: string | null
          escalation_name?: string | null
          gps_location?: string | null
          gst_number?: string | null
          id?: string
          is_contact_verified?: boolean | null
          is_email_verified?: boolean | null
          is_master_dealer?: boolean | null
          is_sub_dealer?: boolean | null
          login_enabled?: boolean | null
          manager_contact?: string | null
          manager_name?: string | null
          msme_number?: string | null
          oem?: string | null
          operation_location?: string | null
          operations_contact_name?: string | null
          operations_contact_phone?: string | null
          owner_contact?: string | null
          owner_email?: string | null
          owner_name?: string | null
          pan_number?: string | null
          parent_dealer_id?: string | null
          password?: string | null
          pincode?: string | null
          price_list_file?: string | null
          razorpayx_contact_id?: string | null
          registered_address?: string | null
          repair_on_site?: boolean | null
          state?: string | null
          status?: string | null
          time_end?: string | null
          time_start?: string | null
          updated_at?: string | null
          vehicle_types?: string[] | null
        }
        Relationships: []
      }
      dealers_onboard_log: {
        Row: {
          created_at: string
          created_by: string | null
          data: Json | null
          dealership_name: string | null
          id: string
          request_body: Json | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          data?: Json | null
          dealership_name?: string | null
          id?: string
          request_body?: Json | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          data?: Json | null
          dealership_name?: string | null
          id?: string
          request_body?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "dealers_onboard_log_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
        ]
      }
      departments: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description: string
          id?: string
          name: string
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string
          id?: string
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "departments_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
        ]
      }
      draft_form_data: {
        Row: {
          created_at: string
          created_by: string | null
          data: Json | null
          draft_name: string | null
          id: string
          type: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          data?: Json | null
          draft_name?: string | null
          id?: string
          type?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          data?: Json | null
          draft_name?: string | null
          id?: string
          type?: string | null
        }
        Relationships: []
      }
      employee_reset_tokens: {
        Row: {
          created_at: string | null
          employee_id: string
          expires_at: string
          id: string
          token: string
        }
        Insert: {
          created_at?: string | null
          employee_id: string
          expires_at: string
          id?: string
          token: string
        }
        Update: {
          created_at?: string | null
          employee_id?: string
          expires_at?: string
          id?: string
          token?: string
        }
        Relationships: [
          {
            foreignKeyName: "employee_reset_tokens_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
        ]
      }
      employee_roles: {
        Row: {
          assigned_by: string
          created_at: string | null
          employee_id: string | null
          id: string
          role_id: string | null
          updated_at: string | null
        }
        Insert: {
          assigned_by: string
          created_at?: string | null
          employee_id?: string | null
          id?: string
          role_id?: string | null
          updated_at?: string | null
        }
        Update: {
          assigned_by?: string
          created_at?: string | null
          employee_id?: string | null
          id?: string
          role_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "employee_roles_assigned_by_fkey"
            columns: ["assigned_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "employee_roles_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "employee_roles_user_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
        ]
      }
      employees: {
        Row: {
          aadhar_id: string
          address: string
          bank_account: string
          created_at: string | null
          created_by: string | null
          deleted_at: string | null
          department_id: string
          dob: string
          email: string
          emergency_contact: string
          employee_id: string
          employment_type: Database["public"]["Enums"]["employment_type_enum"]
          first_name: string
          gender: Database["public"]["Enums"]["gender_enum"]
          id: string
          ifsc_code: string
          last_name: string
          pancard: string
          password: string
          phone: string
          provident_fund: number | null
          reporting_manager: string | null
          role_id: string
          salary: number
          status: string | null
          tax_deductions: number | null
          updated_at: string | null
        }
        Insert: {
          aadhar_id: string
          address: string
          bank_account: string
          created_at?: string | null
          created_by?: string | null
          deleted_at?: string | null
          department_id: string
          dob: string
          email: string
          emergency_contact: string
          employee_id: string
          employment_type: Database["public"]["Enums"]["employment_type_enum"]
          first_name: string
          gender: Database["public"]["Enums"]["gender_enum"]
          id?: string
          ifsc_code: string
          last_name: string
          pancard: string
          password: string
          phone: string
          provident_fund?: number | null
          reporting_manager?: string | null
          role_id: string
          salary: number
          status?: string | null
          tax_deductions?: number | null
          updated_at?: string | null
        }
        Update: {
          aadhar_id?: string
          address?: string
          bank_account?: string
          created_at?: string | null
          created_by?: string | null
          deleted_at?: string | null
          department_id?: string
          dob?: string
          email?: string
          emergency_contact?: string
          employee_id?: string
          employment_type?: Database["public"]["Enums"]["employment_type_enum"]
          first_name?: string
          gender?: Database["public"]["Enums"]["gender_enum"]
          id?: string
          ifsc_code?: string
          last_name?: string
          pancard?: string
          password?: string
          phone?: string
          provident_fund?: number | null
          reporting_manager?: string | null
          role_id?: string
          salary?: number
          status?: string | null
          tax_deductions?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "employees_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "employees_department_id_fkey"
            columns: ["department_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "employees_reporting_manager_fkey"
            columns: ["reporting_manager"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "employees_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
        ]
      }
      inquiry: {
        Row: {
          company_name: string | null
          created_at: string
          facility_address: string | null
          facility_city: string | null
          facility_state: string | null
          facility_zip: string | null
          first_name: string | null
          id: string
          last_name: string | null
          phone_number: string | null
          prev_applied: string | null
        }
        Insert: {
          company_name?: string | null
          created_at?: string
          facility_address?: string | null
          facility_city?: string | null
          facility_state?: string | null
          facility_zip?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          phone_number?: string | null
          prev_applied?: string | null
        }
        Update: {
          company_name?: string | null
          created_at?: string
          facility_address?: string | null
          facility_city?: string | null
          facility_state?: string | null
          facility_zip?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          phone_number?: string | null
          prev_applied?: string | null
        }
        Relationships: []
      }
      insurers: {
        Row: {
          base_premium: number | null
          coverage: string[] | null
          dealer_share: number | null
          discount_amount: number | null
          discount_percent: number | null
          id: number
          insurer_logo: string | null
          insurer_name: string
          insurer_percentage_logic: number | null
          key_features: string[] | null
          net_difference: number | null
          plan_name: string | null
          plan_type: string | null
          sda_percentage_logic: number | null
          sda_share: number | null
          tags: Json | null
          total_premium: number | null
        }
        Insert: {
          base_premium?: number | null
          coverage?: string[] | null
          dealer_share?: number | null
          discount_amount?: number | null
          discount_percent?: number | null
          id?: number
          insurer_logo?: string | null
          insurer_name: string
          insurer_percentage_logic?: number | null
          key_features?: string[] | null
          net_difference?: number | null
          plan_name?: string | null
          plan_type?: string | null
          sda_percentage_logic?: number | null
          sda_share?: number | null
          tags?: Json | null
          total_premium?: number | null
        }
        Update: {
          base_premium?: number | null
          coverage?: string[] | null
          dealer_share?: number | null
          discount_amount?: number | null
          discount_percent?: number | null
          id?: number
          insurer_logo?: string | null
          insurer_name?: string
          insurer_percentage_logic?: number | null
          key_features?: string[] | null
          net_difference?: number | null
          plan_name?: string | null
          plan_type?: string | null
          sda_percentage_logic?: number | null
          sda_share?: number | null
          tags?: Json | null
          total_premium?: number | null
        }
        Relationships: []
      }
      notifications: {
        Row: {
          created_at: string | null
          id: string
          is_archived: boolean | null
          is_read: boolean | null
          message: string
          metadata: Json | null
          recipient_id: string
          reference_id: string | null
          sender_id: string | null
          type: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_archived?: boolean | null
          is_read?: boolean | null
          message: string
          metadata?: Json | null
          recipient_id: string
          reference_id?: string | null
          sender_id?: string | null
          type: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          is_archived?: boolean | null
          is_read?: boolean | null
          message?: string
          metadata?: Json | null
          recipient_id?: string
          reference_id?: string | null
          sender_id?: string | null
          type?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "notifications_recipient_id_fkey"
            columns: ["recipient_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notifications_sender_id_fkey"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
        ]
      }
      oems: {
        Row: {
          created_at: string
          created_by: string | null
          id: string
          name: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          id?: string
          name?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          id?: string
          name?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "oem_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
        ]
      }
      permissions: {
        Row: {
          category: string | null
          created_at: string | null
          created_by: string | null
          description: string
          id: string
          name: string
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          created_by?: string | null
          description: string
          id?: string
          name: string
        }
        Update: {
          category?: string | null
          created_at?: string | null
          created_by?: string | null
          description?: string
          id?: string
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "permissions_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
        ]
      }
      role_permissions: {
        Row: {
          assigned_by: string
          created_at: string | null
          id: string
          permission_id: string | null
          role_id: string | null
        }
        Insert: {
          assigned_by: string
          created_at?: string | null
          id?: string
          permission_id?: string | null
          role_id?: string | null
        }
        Update: {
          assigned_by?: string
          created_at?: string | null
          id?: string
          permission_id?: string | null
          role_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "role_permissions_assigned_by_fkey"
            columns: ["assigned_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "role_permissions_permission_id_fkey"
            columns: ["permission_id"]
            isOneToOne: false
            referencedRelation: "permissions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "role_permissions_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
        ]
      }
      roles: {
        Row: {
          created_by: string
          department_id: string | null
          description: string
          id: string
          role: string
          role_name: string
        }
        Insert: {
          created_by: string
          department_id?: string | null
          description: string
          id?: string
          role: string
          role_name: string
        }
        Update: {
          created_by?: string
          department_id?: string | null
          description?: string
          id?: string
          role?: string
          role_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "roles_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "roles_department_id_fkey"
            columns: ["department_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
        ]
      }
      rsa_base_plans: {
        Row: {
          created_at: string | null
          description: string | null
          features: string[]
          id: string
          name: string
          price: number
          type: string | null
          validity: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          features?: string[]
          id?: string
          name: string
          price: number
          type?: string | null
          validity: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          features?: string[]
          id?: string
          name?: string
          price?: number
          type?: string | null
          validity?: string
        }
        Relationships: []
      }
      rsa_features: {
        Row: {
          description: string | null
          id: string
          is_active: boolean | null
          name: string
        }
        Insert: {
          description?: string | null
          id?: string
          is_active?: boolean | null
          name: string
        }
        Update: {
          description?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
        }
        Relationships: []
      }
      rsa_plan_features: {
        Row: {
          feature_id: string
          plan_id: string
        }
        Insert: {
          feature_id: string
          plan_id: string
        }
        Update: {
          feature_id?: string
          plan_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "rsa_plan_features_feature_id_fkey"
            columns: ["feature_id"]
            isOneToOne: false
            referencedRelation: "rsa_features"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rsa_plan_features_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "rsa_plans"
            referencedColumns: ["id"]
          },
        ]
      }
      rsa_plan_sales: {
        Row: {
          created_at: string | null
          customer_id: string | null
          dealer_id: string
          end_date: string
          id: string
          oem: string | null
          paid_amount: number
          payment_status: string | null
          plan_duration_years: number
          plan_id: string
          policy_number: string | null
          policy_type: Database["public"]["Enums"]["policy_type"]
          sales_by: string
          start_date: string
          status: string | null
          updated_at: string | null
          vas_sale_id: string | null
          vehicle_id: string
        }
        Insert: {
          created_at?: string | null
          customer_id?: string | null
          dealer_id: string
          end_date: string
          id?: string
          oem?: string | null
          paid_amount: number
          payment_status?: string | null
          plan_duration_years: number
          plan_id: string
          policy_number?: string | null
          policy_type?: Database["public"]["Enums"]["policy_type"]
          sales_by: string
          start_date: string
          status?: string | null
          updated_at?: string | null
          vas_sale_id?: string | null
          vehicle_id: string
        }
        Update: {
          created_at?: string | null
          customer_id?: string | null
          dealer_id?: string
          end_date?: string
          id?: string
          oem?: string | null
          paid_amount?: number
          payment_status?: string | null
          plan_duration_years?: number
          plan_id?: string
          policy_number?: string | null
          policy_type?: Database["public"]["Enums"]["policy_type"]
          sales_by?: string
          start_date?: string
          status?: string | null
          updated_at?: string | null
          vas_sale_id?: string | null
          vehicle_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "rsa_plan_sales_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rsa_plan_sales_dealer_id_fkey"
            columns: ["dealer_id"]
            isOneToOne: false
            referencedRelation: "dealers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rsa_plan_sales_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "dealer_config_plans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rsa_plan_sales_sales_by_fkey"
            columns: ["sales_by"]
            isOneToOne: false
            referencedRelation: "dealer_employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rsa_plan_sales_vas_sale_id_fkey"
            columns: ["vas_sale_id"]
            isOneToOne: false
            referencedRelation: "rsa_vas_sales"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rsa_plan_sales_vehicle_id_fkey"
            columns: ["vehicle_id"]
            isOneToOne: false
            referencedRelation: "vehicles"
            referencedColumns: ["id"]
          },
        ]
      }
      rsa_plans: {
        Row: {
          description: string | null
          features: string[]
          four_year_discount: number | null
          id: string
          is_active: boolean | null
          name: string
          price: number
          three_year_discount: number | null
          two_year_discount: number | null
          type: string | null
          validity: string
        }
        Insert: {
          description?: string | null
          features?: string[]
          four_year_discount?: number | null
          id?: string
          is_active?: boolean | null
          name: string
          price: number
          three_year_discount?: number | null
          two_year_discount?: number | null
          type?: string | null
          validity: string
        }
        Update: {
          description?: string | null
          features?: string[]
          four_year_discount?: number | null
          id?: string
          is_active?: boolean | null
          name?: string
          price?: number
          three_year_discount?: number | null
          two_year_discount?: number | null
          type?: string | null
          validity?: string
        }
        Relationships: []
      }
      rsa_vas_sales: {
        Row: {
          created_at: string | null
          customer_id: string | null
          dealer_id: string
          end_date: string
          features: string[] | null
          id: string
          paid_amount: number
          plan_id: string
          product: string | null
          sales_by: string
          start_date: string
          status: string | null
          updated_at: string | null
          vas_duration_years: number
          vas_name: string | null
          vas_number: string | null
          vehicle_id: string
        }
        Insert: {
          created_at?: string | null
          customer_id?: string | null
          dealer_id: string
          end_date: string
          features?: string[] | null
          id?: string
          paid_amount: number
          plan_id: string
          product?: string | null
          sales_by: string
          start_date: string
          status?: string | null
          updated_at?: string | null
          vas_duration_years: number
          vas_name?: string | null
          vas_number?: string | null
          vehicle_id: string
        }
        Update: {
          created_at?: string | null
          customer_id?: string | null
          dealer_id?: string
          end_date?: string
          features?: string[] | null
          id?: string
          paid_amount?: number
          plan_id?: string
          product?: string | null
          sales_by?: string
          start_date?: string
          status?: string | null
          updated_at?: string | null
          vas_duration_years?: number
          vas_name?: string | null
          vas_number?: string | null
          vehicle_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "rsa_vas_sales_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rsa_vas_sales_dealer_id_fkey"
            columns: ["dealer_id"]
            isOneToOne: false
            referencedRelation: "dealers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rsa_vas_sales_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "dealer_config_plans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rsa_vas_sales_sales_by_fkey"
            columns: ["sales_by"]
            isOneToOne: false
            referencedRelation: "dealer_employees"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rsa_vas_sales_vehicle_id_fkey"
            columns: ["vehicle_id"]
            isOneToOne: false
            referencedRelation: "vehicles"
            referencedColumns: ["id"]
          },
        ]
      }
      sales: {
        Row: {
          base_amount: number | null
          cgst_amount: number | null
          commission_invoice_status: string | null
          created_at: string | null
          customer_id: string | null
          dealer_cgst_on_commission: number | null
          dealer_commission: number | null
          dealer_commission_excl_gst: number | null
          dealer_id: string | null
          dealer_igst_on_commission: number | null
          dealer_payable_amount: number | null
          dealer_sgst_on_commission: number | null
          id: string
          igst_amount: number | null
          invoice_number: string | null
          invoice_url: string | null
          plan_id: string | null
          rsa_plan_sales_id: string | null
          sda_commission: number | null
          sgst_amount: number | null
          tds_amount: number | null
          total_amount: number | null
          wallet_transaction_id: string | null
        }
        Insert: {
          base_amount?: number | null
          cgst_amount?: number | null
          commission_invoice_status?: string | null
          created_at?: string | null
          customer_id?: string | null
          dealer_cgst_on_commission?: number | null
          dealer_commission?: number | null
          dealer_commission_excl_gst?: number | null
          dealer_id?: string | null
          dealer_igst_on_commission?: number | null
          dealer_payable_amount?: number | null
          dealer_sgst_on_commission?: number | null
          id?: string
          igst_amount?: number | null
          invoice_number?: string | null
          invoice_url?: string | null
          plan_id?: string | null
          rsa_plan_sales_id?: string | null
          sda_commission?: number | null
          sgst_amount?: number | null
          tds_amount?: number | null
          total_amount?: number | null
          wallet_transaction_id?: string | null
        }
        Update: {
          base_amount?: number | null
          cgst_amount?: number | null
          commission_invoice_status?: string | null
          created_at?: string | null
          customer_id?: string | null
          dealer_cgst_on_commission?: number | null
          dealer_commission?: number | null
          dealer_commission_excl_gst?: number | null
          dealer_id?: string | null
          dealer_igst_on_commission?: number | null
          dealer_payable_amount?: number | null
          dealer_sgst_on_commission?: number | null
          id?: string
          igst_amount?: number | null
          invoice_number?: string | null
          invoice_url?: string | null
          plan_id?: string | null
          rsa_plan_sales_id?: string | null
          sda_commission?: number | null
          sgst_amount?: number | null
          tds_amount?: number | null
          total_amount?: number | null
          wallet_transaction_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sales_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_dealer_id_fkey"
            columns: ["dealer_id"]
            isOneToOne: false
            referencedRelation: "dealers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "dealer_config_plans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_rsa_plan_sales_id_fkey"
            columns: ["rsa_plan_sales_id"]
            isOneToOne: false
            referencedRelation: "rsa_plan_sales"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sales_wallet_transaction_id_fkey"
            columns: ["wallet_transaction_id"]
            isOneToOne: false
            referencedRelation: "wallet_transactions"
            referencedColumns: ["id"]
          },
        ]
      }
      spatial_ref_sys: {
        Row: {
          auth_name: string | null
          auth_srid: number | null
          proj4text: string | null
          srid: number
          srtext: string | null
        }
        Insert: {
          auth_name?: string | null
          auth_srid?: number | null
          proj4text?: string | null
          srid: number
          srtext?: string | null
        }
        Update: {
          auth_name?: string | null
          auth_srid?: number | null
          proj4text?: string | null
          srid?: number
          srtext?: string | null
        }
        Relationships: []
      }
      tds_transactions: {
        Row: {
          amount: number | null
          created_at: string | null
          dealer_id: string | null
          id: string
          percent: number | null
          sale_id: string | null
        }
        Insert: {
          amount?: number | null
          created_at?: string | null
          dealer_id?: string | null
          id: string
          percent?: number | null
          sale_id?: string | null
        }
        Update: {
          amount?: number | null
          created_at?: string | null
          dealer_id?: string | null
          id?: string
          percent?: number | null
          sale_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tds_transactions_dealer_id_fkey"
            columns: ["dealer_id"]
            isOneToOne: false
            referencedRelation: "dealers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tds_transactions_sale_id_fkey"
            columns: ["sale_id"]
            isOneToOne: false
            referencedRelation: "sales"
            referencedColumns: ["id"]
          },
        ]
      }
      vehicle_models: {
        Row: {
          brand: string
          created_at: string | null
          id: string
          model_name: string
          type: string | null
        }
        Insert: {
          brand: string
          created_at?: string | null
          id?: string
          model_name: string
          type?: string | null
        }
        Update: {
          brand?: string
          created_at?: string | null
          id?: string
          model_name?: string
          type?: string | null
        }
        Relationships: []
      }
      vehicles: {
        Row: {
          chassis_number: string
          created_at: string | null
          customer_id: string
          dealer_id: string
          engine_number: string
          fuel_type: string
          id: string
          registration_type: string | null
          updated_at: string | null
          vehicle_category: string
          vehicle_company: string
          vehicle_model: string
          vehicle_registration_number: string
        }
        Insert: {
          chassis_number: string
          created_at?: string | null
          customer_id: string
          dealer_id: string
          engine_number: string
          fuel_type: string
          id?: string
          registration_type?: string | null
          updated_at?: string | null
          vehicle_category: string
          vehicle_company: string
          vehicle_model: string
          vehicle_registration_number?: string
        }
        Update: {
          chassis_number?: string
          created_at?: string | null
          customer_id?: string
          dealer_id?: string
          engine_number?: string
          fuel_type?: string
          id?: string
          registration_type?: string | null
          updated_at?: string | null
          vehicle_category?: string
          vehicle_company?: string
          vehicle_model?: string
          vehicle_registration_number?: string
        }
        Relationships: [
          {
            foreignKeyName: "vehicles_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vehicles_dealer_id_fkey"
            columns: ["dealer_id"]
            isOneToOne: false
            referencedRelation: "dealers"
            referencedColumns: ["id"]
          },
        ]
      }
      vendor_bank_info: {
        Row: {
          account_holder_name: string
          account_number: string
          bank_name: string
          cancelled_cheque_file_path: string | null
          created_at: string | null
          id: string
          ifsc_code: string
          vendor_id: string | null
        }
        Insert: {
          account_holder_name: string
          account_number: string
          bank_name: string
          cancelled_cheque_file_path?: string | null
          created_at?: string | null
          id?: string
          ifsc_code: string
          vendor_id?: string | null
        }
        Update: {
          account_holder_name?: string
          account_number?: string
          bank_name?: string
          cancelled_cheque_file_path?: string | null
          created_at?: string | null
          id?: string
          ifsc_code?: string
          vendor_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "vendor_bank_info_vendor_id_fkey"
            columns: ["vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["id"]
          },
        ]
      }
      vendor_contacts: {
        Row: {
          finance_contact_email: string | null
          finance_contact_name: string | null
          finance_contact_number: string | null
          id: string
          vendor_id: string | null
        }
        Insert: {
          finance_contact_email?: string | null
          finance_contact_name?: string | null
          finance_contact_number?: string | null
          id?: string
          vendor_id?: string | null
        }
        Update: {
          finance_contact_email?: string | null
          finance_contact_name?: string | null
          finance_contact_number?: string | null
          id?: string
          vendor_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "vendor_contacts_vendor_id_fkey"
            columns: ["vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["id"]
          },
        ]
      }
      vendor_documents: {
        Row: {
          address_proof_file_path: string | null
          cancelled_cheque_file_path: string | null
          gst_certificate_file_path: string | null
          gst_number: string | null
          id: string
          pan_card_file_path: string | null
          pan_number: string | null
          vendor_id: string | null
        }
        Insert: {
          address_proof_file_path?: string | null
          cancelled_cheque_file_path?: string | null
          gst_certificate_file_path?: string | null
          gst_number?: string | null
          id?: string
          pan_card_file_path?: string | null
          pan_number?: string | null
          vendor_id?: string | null
        }
        Update: {
          address_proof_file_path?: string | null
          cancelled_cheque_file_path?: string | null
          gst_certificate_file_path?: string | null
          gst_number?: string | null
          id?: string
          pan_card_file_path?: string | null
          pan_number?: string | null
          vendor_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "vendor_documents_vendor_id_fkey"
            columns: ["vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["id"]
          },
        ]
      }
      vendor_drivers: {
        Row: {
          created_at: string
          id: string
          is_active: boolean | null
          mobile_number: string | null
          name: string | null
          preferred_language: string | null
          username: string | null
          vendor_id: string | null
          vendor_operating_area_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          is_active?: boolean | null
          mobile_number?: string | null
          name?: string | null
          preferred_language?: string | null
          username?: string | null
          vendor_id?: string | null
          vendor_operating_area_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          is_active?: boolean | null
          mobile_number?: string | null
          name?: string | null
          preferred_language?: string | null
          username?: string | null
          vendor_id?: string | null
          vendor_operating_area_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "vendor_drivers_vendor_id_fkey"
            columns: ["vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vendor_drivers_vendor_operating_area_id_fkey"
            columns: ["vendor_operating_area_id"]
            isOneToOne: false
            referencedRelation: "vendor_operating_areas"
            referencedColumns: ["id"]
          },
        ]
      }
      vendor_fleets: {
        Row: {
          created_at: string
          id: number
          vehicle_registration_number: string | null
          vehicle_type: string | null
          vendor_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          vehicle_registration_number?: string | null
          vehicle_type?: string | null
          vendor_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          vehicle_registration_number?: string | null
          vehicle_type?: string | null
          vendor_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "vendor_fleets_vendor_id_fkey"
            columns: ["vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["id"]
          },
        ]
      }
      vendor_operating_areas: {
        Row: {
          city: string
          contact_name: string | null
          contact_number: string | null
          id: string
          latitude: number
          location: unknown
          location_url: string | null
          longitude: number
          max_distance_covered: number | null
          price_list_name: string | null
          region: string
          state: string | null
          technician: boolean | null
          vehicles: string[] | null
          vendor_id: string | null
        }
        Insert: {
          city: string
          contact_name?: string | null
          contact_number?: string | null
          id?: string
          latitude: number
          location?: unknown
          location_url?: string | null
          longitude: number
          max_distance_covered?: number | null
          price_list_name?: string | null
          region: string
          state?: string | null
          technician?: boolean | null
          vehicles?: string[] | null
          vendor_id?: string | null
        }
        Update: {
          city?: string
          contact_name?: string | null
          contact_number?: string | null
          id?: string
          latitude?: number
          location?: unknown
          location_url?: string | null
          longitude?: number
          max_distance_covered?: number | null
          price_list_name?: string | null
          region?: string
          state?: string | null
          technician?: boolean | null
          vehicles?: string[] | null
          vendor_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "vendor_operating_areas_vendor_id_fkey"
            columns: ["vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["id"]
          },
        ]
      }
      vendor_pricing: {
        Row: {
          id: string
          night_charges: number | null
          night_charges_towing: number | null
          notes: string | null
          price_list_file_path: string | null
          price_per_additional_km: number
          price_per_service: number
          repair_on_site_price: number | null
          vendor_id: string | null
        }
        Insert: {
          id?: string
          night_charges?: number | null
          night_charges_towing?: number | null
          notes?: string | null
          price_list_file_path?: string | null
          price_per_additional_km: number
          price_per_service: number
          repair_on_site_price?: number | null
          vendor_id?: string | null
        }
        Update: {
          id?: string
          night_charges?: number | null
          night_charges_towing?: number | null
          notes?: string | null
          price_list_file_path?: string | null
          price_per_additional_km?: number
          price_per_service?: number
          repair_on_site_price?: number | null
          vendor_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "vendor_pricing_vendor_id_fkey"
            columns: ["vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["id"]
          },
        ]
      }
      vendor_services: {
        Row: {
          additional_price: number | null
          created_at: string | null
          day_charge: number | null
          fixed_distance_charge: number | null
          id: string
          night_charge: number | null
          price_list_name: string | null
          service_name: string | null
          state: string | null
          vendor_id: string | null
          waiting_charge: number | null
        }
        Insert: {
          additional_price?: number | null
          created_at?: string | null
          day_charge?: number | null
          fixed_distance_charge?: number | null
          id?: string
          night_charge?: number | null
          price_list_name?: string | null
          service_name?: string | null
          state?: string | null
          vendor_id?: string | null
          waiting_charge?: number | null
        }
        Update: {
          additional_price?: number | null
          created_at?: string | null
          day_charge?: number | null
          fixed_distance_charge?: number | null
          id?: string
          night_charge?: number | null
          price_list_name?: string | null
          service_name?: string | null
          state?: string | null
          vendor_id?: string | null
          waiting_charge?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "vendor_services_vendor_id_fkey"
            columns: ["vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["id"]
          },
        ]
      }
      vendor_services_configs: {
        Row: {
          created_at: string
          id: string
          price_list_name: string | null
          price_list_path: string | null
          repair_on_site: boolean
          state: string
          updated_at: string
          vendor_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          price_list_name?: string | null
          price_list_path?: string | null
          repair_on_site?: boolean
          state: string
          updated_at?: string
          vendor_id: string
        }
        Update: {
          created_at?: string
          id?: string
          price_list_name?: string | null
          price_list_path?: string | null
          repair_on_site?: boolean
          state?: string
          updated_at?: string
          vendor_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "vendor_services_configs_vendor_id_fkey"
            columns: ["vendor_id"]
            isOneToOne: false
            referencedRelation: "vendors"
            referencedColumns: ["id"]
          },
        ]
      }
      vendors: {
        Row: {
          address: string
          available_days: string[] | null
          city: string
          created_at: string | null
          created_by: string | null
          due_date: string | null
          id: string
          is_24x7: boolean | null
          is_active: boolean | null
          is_online: boolean | null
          location_url: string | null
          login_enabled: boolean | null
          name: string
          owner_contact_number: string | null
          owner_email: string | null
          owner_name: string | null
          owner_whatsapp: string | null
          password: string | null
          pincode: string
          price_list_file_path: string | null
          primary_contact_name: string
          primary_contact_number: string
          primary_email: string
          remark: string | null
          remark_title: string | null
          repair_on_site: boolean | null
          state: string
          status: string | null
          time_end: string | null
          time_start: string | null
          updated_at: string | null
          vendor_id: string | null
        }
        Insert: {
          address: string
          available_days?: string[] | null
          city: string
          created_at?: string | null
          created_by?: string | null
          due_date?: string | null
          id?: string
          is_24x7?: boolean | null
          is_active?: boolean | null
          is_online?: boolean | null
          location_url?: string | null
          login_enabled?: boolean | null
          name: string
          owner_contact_number?: string | null
          owner_email?: string | null
          owner_name?: string | null
          owner_whatsapp?: string | null
          password?: string | null
          pincode: string
          price_list_file_path?: string | null
          primary_contact_name: string
          primary_contact_number: string
          primary_email: string
          remark?: string | null
          remark_title?: string | null
          repair_on_site?: boolean | null
          state: string
          status?: string | null
          time_end?: string | null
          time_start?: string | null
          updated_at?: string | null
          vendor_id?: string | null
        }
        Update: {
          address?: string
          available_days?: string[] | null
          city?: string
          created_at?: string | null
          created_by?: string | null
          due_date?: string | null
          id?: string
          is_24x7?: boolean | null
          is_active?: boolean | null
          is_online?: boolean | null
          location_url?: string | null
          login_enabled?: boolean | null
          name?: string
          owner_contact_number?: string | null
          owner_email?: string | null
          owner_name?: string | null
          owner_whatsapp?: string | null
          password?: string | null
          pincode?: string
          price_list_file_path?: string | null
          primary_contact_name?: string
          primary_contact_number?: string
          primary_email?: string
          remark?: string | null
          remark_title?: string | null
          repair_on_site?: boolean | null
          state?: string
          status?: string | null
          time_end?: string | null
          time_start?: string | null
          updated_at?: string | null
          vendor_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "vendors_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
        ]
      }
      vendors_onboard_log: {
        Row: {
          created_at: string
          created_by: string | null
          data: Json | null
          dealership_name: string | null
          id: string
          request_body: Json | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          data?: Json | null
          dealership_name?: string | null
          id?: string
          request_body?: Json | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          data?: Json | null
          dealership_name?: string | null
          id?: string
          request_body?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "vendors_onboard_log_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
        ]
      }
      wallet_config: {
        Row: {
          average_vehicles_sold_monthly: number
          core_dealer_share: number | null
          created_at: string | null
          credit_wallet_amount: number
          dealer_id: string | null
          dealership_share: number
          id: string
          max_dealer_share: number | null
          minimum_wallet_amount: number
          rsa_sold_monthly: number
          sda_share: number
          sda_share_core: number | null
          sda_share_max: number | null
          updated_at: string | null
          wallet_id: string | null
        }
        Insert: {
          average_vehicles_sold_monthly: number
          core_dealer_share?: number | null
          created_at?: string | null
          credit_wallet_amount: number
          dealer_id?: string | null
          dealership_share: number
          id?: string
          max_dealer_share?: number | null
          minimum_wallet_amount: number
          rsa_sold_monthly: number
          sda_share: number
          sda_share_core?: number | null
          sda_share_max?: number | null
          updated_at?: string | null
          wallet_id?: string | null
        }
        Update: {
          average_vehicles_sold_monthly?: number
          core_dealer_share?: number | null
          created_at?: string | null
          credit_wallet_amount?: number
          dealer_id?: string | null
          dealership_share?: number
          id?: string
          max_dealer_share?: number | null
          minimum_wallet_amount?: number
          rsa_sold_monthly?: number
          sda_share?: number
          sda_share_core?: number | null
          sda_share_max?: number | null
          updated_at?: string | null
          wallet_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "wallet_config_dealer_id_fkey"
            columns: ["dealer_id"]
            isOneToOne: false
            referencedRelation: "dealers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "wallet_configurations_wallet_id_fkey"
            columns: ["wallet_id"]
            isOneToOne: false
            referencedRelation: "wallets"
            referencedColumns: ["id"]
          },
        ]
      }
      wallet_config_default: {
        Row: {
          cashback_percent: number | null
          created_at: string | null
          credit_validity_days: number | null
          id: string
          tds_percent: number | null
        }
        Insert: {
          cashback_percent?: number | null
          created_at?: string | null
          credit_validity_days?: number | null
          id?: string
          tds_percent?: number | null
        }
        Update: {
          cashback_percent?: number | null
          created_at?: string | null
          credit_validity_days?: number | null
          id?: string
          tds_percent?: number | null
        }
        Relationships: []
      }
      wallet_manual_payment_requests: {
        Row: {
          amount: number
          created_at: string | null
          dealer_id: string | null
          deposit_date: string | null
          id: string
          receipt_url: string | null
          remarks: string | null
          status: string | null
          utr_number: string | null
          verified_by: string | null
        }
        Insert: {
          amount: number
          created_at?: string | null
          dealer_id?: string | null
          deposit_date?: string | null
          id?: string
          receipt_url?: string | null
          remarks?: string | null
          status?: string | null
          utr_number?: string | null
          verified_by?: string | null
        }
        Update: {
          amount?: number
          created_at?: string | null
          dealer_id?: string | null
          deposit_date?: string | null
          id?: string
          receipt_url?: string | null
          remarks?: string | null
          status?: string | null
          utr_number?: string | null
          verified_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "wallet_manual_payment_requests_dealer_id_fkey"
            columns: ["dealer_id"]
            isOneToOne: false
            referencedRelation: "dealers"
            referencedColumns: ["id"]
          },
        ]
      }
      wallet_payments: {
        Row: {
          confirmed_at: string | null
          created_at: string | null
          dealer_id: string | null
          discount: number | null
          gross_amount: number | null
          id: string
          net_amount: number | null
          payment_mode: string | null
          payment_status: string | null
          razorpay_order_id: string | null
          razorpay_payment_id: string | null
          razorpay_signature: string | null
          receipt_url: string | null
        }
        Insert: {
          confirmed_at?: string | null
          created_at?: string | null
          dealer_id?: string | null
          discount?: number | null
          gross_amount?: number | null
          id?: string
          net_amount?: number | null
          payment_mode?: string | null
          payment_status?: string | null
          razorpay_order_id?: string | null
          razorpay_payment_id?: string | null
          razorpay_signature?: string | null
          receipt_url?: string | null
        }
        Update: {
          confirmed_at?: string | null
          created_at?: string | null
          dealer_id?: string | null
          discount?: number | null
          gross_amount?: number | null
          id?: string
          net_amount?: number | null
          payment_mode?: string | null
          payment_status?: string | null
          razorpay_order_id?: string | null
          razorpay_payment_id?: string | null
          razorpay_signature?: string | null
          receipt_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "wallet_payments_dealer_id_fkey"
            columns: ["dealer_id"]
            isOneToOne: false
            referencedRelation: "dealers"
            referencedColumns: ["id"]
          },
        ]
      }
      wallet_transactions: {
        Row: {
          amount: number
          created_at: string | null
          dealer_id: string | null
          id: string
          note: string | null
          reference_id: string | null
          reference_type: string | null
          source: string | null
          status: string | null
          type: string | null
          updated_at: string | null
          wallet_id: string | null
        }
        Insert: {
          amount: number
          created_at?: string | null
          dealer_id?: string | null
          id?: string
          note?: string | null
          reference_id?: string | null
          reference_type?: string | null
          source?: string | null
          status?: string | null
          type?: string | null
          updated_at?: string | null
          wallet_id?: string | null
        }
        Update: {
          amount?: number
          created_at?: string | null
          dealer_id?: string | null
          id?: string
          note?: string | null
          reference_id?: string | null
          reference_type?: string | null
          source?: string | null
          status?: string | null
          type?: string | null
          updated_at?: string | null
          wallet_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "wallet_transactions_dealer_id_fkey"
            columns: ["dealer_id"]
            isOneToOne: false
            referencedRelation: "dealers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "wallet_transactions_wallet_id_fkey"
            columns: ["wallet_id"]
            isOneToOne: false
            referencedRelation: "wallets"
            referencedColumns: ["id"]
          },
        ]
      }
      wallet_withdrawal_options: {
        Row: {
          account_holder_name: string | null
          account_number: string | null
          bank_name: string | null
          cancelled_cheque_file: string | null
          created_at: string | null
          dealer_id: string | null
          id: string
          ifsc_code: string | null
          is_default: boolean | null
          razorpayx_contact_id: string | null
          razorpayx_fund_account_id: string | null
        }
        Insert: {
          account_holder_name?: string | null
          account_number?: string | null
          bank_name?: string | null
          cancelled_cheque_file?: string | null
          created_at?: string | null
          dealer_id?: string | null
          id?: string
          ifsc_code?: string | null
          is_default?: boolean | null
          razorpayx_contact_id?: string | null
          razorpayx_fund_account_id?: string | null
        }
        Update: {
          account_holder_name?: string | null
          account_number?: string | null
          bank_name?: string | null
          cancelled_cheque_file?: string | null
          created_at?: string | null
          dealer_id?: string | null
          id?: string
          ifsc_code?: string | null
          is_default?: boolean | null
          razorpayx_contact_id?: string | null
          razorpayx_fund_account_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "wallet_withdrawal_options_dealer_id_fkey"
            columns: ["dealer_id"]
            isOneToOne: false
            referencedRelation: "dealers"
            referencedColumns: ["id"]
          },
        ]
      }
      wallet_withdrawals: {
        Row: {
          amount: number
          bank_account_id: string | null
          created_at: string | null
          dealer_id: string | null
          failure_reason: string | null
          id: string
          payout_method: string | null
          payout_reference: string | null
          razorpayx_mode: string | null
          razorpayx_payout_id: string | null
          razorpayx_status: string | null
          status: string | null
          updated_at: string | null
          utr_number: string | null
        }
        Insert: {
          amount: number
          bank_account_id?: string | null
          created_at?: string | null
          dealer_id?: string | null
          failure_reason?: string | null
          id?: string
          payout_method?: string | null
          payout_reference?: string | null
          razorpayx_mode?: string | null
          razorpayx_payout_id?: string | null
          razorpayx_status?: string | null
          status?: string | null
          updated_at?: string | null
          utr_number?: string | null
        }
        Update: {
          amount?: number
          bank_account_id?: string | null
          created_at?: string | null
          dealer_id?: string | null
          failure_reason?: string | null
          id?: string
          payout_method?: string | null
          payout_reference?: string | null
          razorpayx_mode?: string | null
          razorpayx_payout_id?: string | null
          razorpayx_status?: string | null
          status?: string | null
          updated_at?: string | null
          utr_number?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "wallet_withdrawals_bank_account_id_fkey"
            columns: ["bank_account_id"]
            isOneToOne: false
            referencedRelation: "wallet_withdrawal_options"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "wallet_withdrawals_dealer_id_fkey"
            columns: ["dealer_id"]
            isOneToOne: false
            referencedRelation: "dealers"
            referencedColumns: ["id"]
          },
        ]
      }
      wallets: {
        Row: {
          cash_balance: number | null
          created_at: string | null
          credit_expiry_date: string | null
          credits_limit: number | null
          credits_used: number | null
          dealer_id: string | null
          id: string
          is_active: boolean | null
          is_credit_facility: boolean | null
          updated_at: string | null
          wallet_id: string | null
        }
        Insert: {
          cash_balance?: number | null
          created_at?: string | null
          credit_expiry_date?: string | null
          credits_limit?: number | null
          credits_used?: number | null
          dealer_id?: string | null
          id?: string
          is_active?: boolean | null
          is_credit_facility?: boolean | null
          updated_at?: string | null
          wallet_id?: string | null
        }
        Update: {
          cash_balance?: number | null
          created_at?: string | null
          credit_expiry_date?: string | null
          credits_limit?: number | null
          credits_used?: number | null
          dealer_id?: string | null
          id?: string
          is_active?: boolean | null
          is_credit_facility?: boolean | null
          updated_at?: string | null
          wallet_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "wallets_dealer_id_fkey"
            columns: ["dealer_id"]
            isOneToOne: false
            referencedRelation: "dealers"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      geography_columns: {
        Row: {
          coord_dimension: number | null
          f_geography_column: unknown
          f_table_catalog: unknown
          f_table_name: unknown
          f_table_schema: unknown
          srid: number | null
          type: string | null
        }
        Relationships: []
      }
      geometry_columns: {
        Row: {
          coord_dimension: number | null
          f_geometry_column: unknown
          f_table_catalog: string | null
          f_table_name: unknown
          f_table_schema: unknown
          srid: number | null
          type: string | null
        }
        Insert: {
          coord_dimension?: number | null
          f_geometry_column?: unknown
          f_table_catalog?: string | null
          f_table_name?: unknown
          f_table_schema?: unknown
          srid?: number | null
          type?: string | null
        }
        Update: {
          coord_dimension?: number | null
          f_geometry_column?: unknown
          f_table_catalog?: string | null
          f_table_name?: unknown
          f_table_schema?: unknown
          srid?: number | null
          type?: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      _postgis_deprecate: {
        Args: { newname: string; oldname: string; version: string }
        Returns: undefined
      }
      _postgis_index_extent: {
        Args: { col: string; tbl: unknown }
        Returns: unknown
      }
      _postgis_pgsql_version: { Args: never; Returns: string }
      _postgis_scripts_pgsql_version: { Args: never; Returns: string }
      _postgis_selectivity: {
        Args: { att_name: string; geom: unknown; mode?: string; tbl: unknown }
        Returns: number
      }
      _postgis_stats: {
        Args: { ""?: string; att_name: string; tbl: unknown }
        Returns: string
      }
      _st_3dintersects: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_contains: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_containsproperly: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_coveredby:
        | { Args: { geog1: unknown; geog2: unknown }; Returns: boolean }
        | { Args: { geom1: unknown; geom2: unknown }; Returns: boolean }
      _st_covers:
        | { Args: { geog1: unknown; geog2: unknown }; Returns: boolean }
        | { Args: { geom1: unknown; geom2: unknown }; Returns: boolean }
      _st_crosses: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_dwithin: {
        Args: {
          geog1: unknown
          geog2: unknown
          tolerance: number
          use_spheroid?: boolean
        }
        Returns: boolean
      }
      _st_equals: { Args: { geom1: unknown; geom2: unknown }; Returns: boolean }
      _st_intersects: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_linecrossingdirection: {
        Args: { line1: unknown; line2: unknown }
        Returns: number
      }
      _st_longestline: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      _st_maxdistance: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      _st_orderingequals: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_overlaps: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_sortablehash: { Args: { geom: unknown }; Returns: number }
      _st_touches: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_voronoi: {
        Args: {
          clip?: unknown
          g1: unknown
          return_polygons?: boolean
          tolerance?: number
        }
        Returns: unknown
      }
      _st_within: { Args: { geom1: unknown; geom2: unknown }; Returns: boolean }
      addauth: { Args: { "": string }; Returns: boolean }
      addgeometrycolumn:
        | {
            Args: {
              column_name: string
              new_dim: number
              new_srid: number
              new_type: string
              schema_name: string
              table_name: string
              use_typmod?: boolean
            }
            Returns: string
          }
        | {
            Args: {
              column_name: string
              new_dim: number
              new_srid: number
              new_type: string
              table_name: string
              use_typmod?: boolean
            }
            Returns: string
          }
        | {
            Args: {
              catalog_name: string
              column_name: string
              new_dim: number
              new_srid_in: number
              new_type: string
              schema_name: string
              table_name: string
              use_typmod?: boolean
            }
            Returns: string
          }
      disablelongtransactions: { Args: never; Returns: string }
      dropgeometrycolumn:
        | {
            Args: {
              column_name: string
              schema_name: string
              table_name: string
            }
            Returns: string
          }
        | { Args: { column_name: string; table_name: string }; Returns: string }
        | {
            Args: {
              catalog_name: string
              column_name: string
              schema_name: string
              table_name: string
            }
            Returns: string
          }
      dropgeometrytable:
        | { Args: { schema_name: string; table_name: string }; Returns: string }
        | { Args: { table_name: string }; Returns: string }
        | {
            Args: {
              catalog_name: string
              schema_name: string
              table_name: string
            }
            Returns: string
          }
      enablelongtransactions: { Args: never; Returns: string }
      equals: { Args: { geom1: unknown; geom2: unknown }; Returns: boolean }
      find_nearby_vendors: {
        Args: { radius_meters?: number; user_lat: number; user_lng: number }
        Returns: {
          city: string
          contact_name: string
          contact_number: string
          distance_meters: number
          id: string
          latitude: number
          longitude: number
          region: string
          state: string
          vehicles: string[]
          vendor_id: string
        }[]
      }
      find_nearby_vendors_services: {
        Args: {
          input_latitude: number
          input_longitude: number
          max_distance_km?: number
          required_all?: boolean
          services?: string[]
        }
        Returns: {
          city: string
          contact_name: string
          contact_number: string
          distance: number
          distance_meters: number
          id: string
          latitude: number
          longitude: number
          region: string
          services: string[]
          state: string
          vehicles: string[]
          vendor_id: string
          vendor_name: string
        }[]
      }
      geometry: { Args: { "": string }; Returns: unknown }
      geometry_above: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_below: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_cmp: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      geometry_contained_3d: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_contains: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_contains_3d: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_distance_box: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      geometry_distance_centroid: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      geometry_eq: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_ge: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_gt: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_le: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_left: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_lt: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_overabove: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_overbelow: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_overlaps: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_overlaps_3d: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_overleft: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_overright: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_right: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_same: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_same_3d: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_within: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geomfromewkt: { Args: { "": string }; Returns: unknown }
      get_employee_sales_chart: {
        Args: {
          input_employee_id: string
          input_month?: number
          input_year?: number
          range_type: string
        }
        Returns: {
          count: number
          day: string
        }[]
      }
      get_monthly_sales_chart: {
        Args: { input_dealer_id: string }
        Returns: {
          count: number
          day: string
        }[]
      }
      get_plan_sales_stats: {
        Args: {
          dealer_input: string
          month?: number
          range?: string
          year?: number
        }
        Returns: {
          count: number
          name: string
          percentage: number
        }[]
      }
      get_plan_type_stats: {
        Args: { dealer_input: string }
        Returns: {
          count: number
          name: string
          percentage: number
        }[]
      }
      get_sales_chart: {
        Args: {
          input_dealer_id: string
          input_month?: number
          input_year?: number
          range_type: string
        }
        Returns: {
          count: number
          day: string
        }[]
      }
      get_top_employees_by_dealer: {
        Args: { dealer_id: string }
        Returns: Database["public"]["CompositeTypes"]["top_dealer_employee"][]
        SetofOptions: {
          from: "*"
          to: "top_dealer_employee"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      gettransactionid: { Args: never; Returns: unknown }
      longtransactionsenabled: { Args: never; Returns: boolean }
      populate_geometry_columns:
        | { Args: { use_typmod?: boolean }; Returns: string }
        | { Args: { tbl_oid: unknown; use_typmod?: boolean }; Returns: number }
      postgis_constraint_dims: {
        Args: { geomcolumn: string; geomschema: string; geomtable: string }
        Returns: number
      }
      postgis_constraint_srid: {
        Args: { geomcolumn: string; geomschema: string; geomtable: string }
        Returns: number
      }
      postgis_constraint_type: {
        Args: { geomcolumn: string; geomschema: string; geomtable: string }
        Returns: string
      }
      postgis_extensions_upgrade: { Args: never; Returns: string }
      postgis_full_version: { Args: never; Returns: string }
      postgis_geos_version: { Args: never; Returns: string }
      postgis_lib_build_date: { Args: never; Returns: string }
      postgis_lib_revision: { Args: never; Returns: string }
      postgis_lib_version: { Args: never; Returns: string }
      postgis_libjson_version: { Args: never; Returns: string }
      postgis_liblwgeom_version: { Args: never; Returns: string }
      postgis_libprotobuf_version: { Args: never; Returns: string }
      postgis_libxml_version: { Args: never; Returns: string }
      postgis_proj_version: { Args: never; Returns: string }
      postgis_scripts_build_date: { Args: never; Returns: string }
      postgis_scripts_installed: { Args: never; Returns: string }
      postgis_scripts_released: { Args: never; Returns: string }
      postgis_svn_version: { Args: never; Returns: string }
      postgis_type_name: {
        Args: {
          coord_dimension: number
          geomname: string
          use_new_name?: boolean
        }
        Returns: string
      }
      postgis_version: { Args: never; Returns: string }
      postgis_wagyu_version: { Args: never; Returns: string }
      st_3dclosestpoint: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_3ddistance: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      st_3dintersects: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_3dlongestline: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_3dmakebox: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_3dmaxdistance: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      st_3dshortestline: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_addpoint: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_angle:
        | { Args: { line1: unknown; line2: unknown }; Returns: number }
        | {
            Args: { pt1: unknown; pt2: unknown; pt3: unknown; pt4?: unknown }
            Returns: number
          }
      st_area:
        | { Args: { geog: unknown; use_spheroid?: boolean }; Returns: number }
        | { Args: { "": string }; Returns: number }
      st_asencodedpolyline: {
        Args: { geom: unknown; nprecision?: number }
        Returns: string
      }
      st_asewkt: { Args: { "": string }; Returns: string }
      st_asgeojson:
        | {
            Args: {
              geom_column?: string
              maxdecimaldigits?: number
              pretty_bool?: boolean
              r: Record<string, unknown>
            }
            Returns: string
          }
        | {
            Args: { geom: unknown; maxdecimaldigits?: number; options?: number }
            Returns: string
          }
        | {
            Args: { geog: unknown; maxdecimaldigits?: number; options?: number }
            Returns: string
          }
        | { Args: { "": string }; Returns: string }
      st_asgml:
        | {
            Args: { geom: unknown; maxdecimaldigits?: number; options?: number }
            Returns: string
          }
        | {
            Args: {
              geom: unknown
              id?: string
              maxdecimaldigits?: number
              nprefix?: string
              options?: number
              version: number
            }
            Returns: string
          }
        | {
            Args: {
              geog: unknown
              id?: string
              maxdecimaldigits?: number
              nprefix?: string
              options?: number
            }
            Returns: string
          }
        | {
            Args: {
              geog: unknown
              id?: string
              maxdecimaldigits?: number
              nprefix?: string
              options?: number
              version: number
            }
            Returns: string
          }
        | { Args: { "": string }; Returns: string }
      st_askml:
        | {
            Args: { geom: unknown; maxdecimaldigits?: number; nprefix?: string }
            Returns: string
          }
        | {
            Args: { geog: unknown; maxdecimaldigits?: number; nprefix?: string }
            Returns: string
          }
        | { Args: { "": string }; Returns: string }
      st_aslatlontext: {
        Args: { geom: unknown; tmpl?: string }
        Returns: string
      }
      st_asmarc21: { Args: { format?: string; geom: unknown }; Returns: string }
      st_asmvtgeom: {
        Args: {
          bounds: unknown
          buffer?: number
          clip_geom?: boolean
          extent?: number
          geom: unknown
        }
        Returns: unknown
      }
      st_assvg:
        | {
            Args: { geom: unknown; maxdecimaldigits?: number; rel?: number }
            Returns: string
          }
        | {
            Args: { geog: unknown; maxdecimaldigits?: number; rel?: number }
            Returns: string
          }
        | { Args: { "": string }; Returns: string }
      st_astext: { Args: { "": string }; Returns: string }
      st_astwkb:
        | {
            Args: {
              geom: unknown[]
              ids: number[]
              prec?: number
              prec_m?: number
              prec_z?: number
              with_boxes?: boolean
              with_sizes?: boolean
            }
            Returns: string
          }
        | {
            Args: {
              geom: unknown
              prec?: number
              prec_m?: number
              prec_z?: number
              with_boxes?: boolean
              with_sizes?: boolean
            }
            Returns: string
          }
      st_asx3d: {
        Args: { geom: unknown; maxdecimaldigits?: number; options?: number }
        Returns: string
      }
      st_azimuth:
        | { Args: { geom1: unknown; geom2: unknown }; Returns: number }
        | { Args: { geog1: unknown; geog2: unknown }; Returns: number }
      st_boundingdiagonal: {
        Args: { fits?: boolean; geom: unknown }
        Returns: unknown
      }
      st_buffer:
        | {
            Args: { geom: unknown; options?: string; radius: number }
            Returns: unknown
          }
        | {
            Args: { geom: unknown; quadsegs: number; radius: number }
            Returns: unknown
          }
      st_centroid: { Args: { "": string }; Returns: unknown }
      st_clipbybox2d: {
        Args: { box: unknown; geom: unknown }
        Returns: unknown
      }
      st_closestpoint: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_collect: { Args: { geom1: unknown; geom2: unknown }; Returns: unknown }
      st_concavehull: {
        Args: {
          param_allow_holes?: boolean
          param_geom: unknown
          param_pctconvex: number
        }
        Returns: unknown
      }
      st_contains: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_containsproperly: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_coorddim: { Args: { geometry: unknown }; Returns: number }
      st_coveredby:
        | { Args: { geog1: unknown; geog2: unknown }; Returns: boolean }
        | { Args: { geom1: unknown; geom2: unknown }; Returns: boolean }
      st_covers:
        | { Args: { geog1: unknown; geog2: unknown }; Returns: boolean }
        | { Args: { geom1: unknown; geom2: unknown }; Returns: boolean }
      st_crosses: { Args: { geom1: unknown; geom2: unknown }; Returns: boolean }
      st_curvetoline: {
        Args: { flags?: number; geom: unknown; tol?: number; toltype?: number }
        Returns: unknown
      }
      st_delaunaytriangles: {
        Args: { flags?: number; g1: unknown; tolerance?: number }
        Returns: unknown
      }
      st_difference: {
        Args: { geom1: unknown; geom2: unknown; gridsize?: number }
        Returns: unknown
      }
      st_disjoint: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_distance:
        | { Args: { geom1: unknown; geom2: unknown }; Returns: number }
        | {
            Args: { geog1: unknown; geog2: unknown; use_spheroid?: boolean }
            Returns: number
          }
      st_distancesphere:
        | { Args: { geom1: unknown; geom2: unknown }; Returns: number }
        | {
            Args: { geom1: unknown; geom2: unknown; radius: number }
            Returns: number
          }
      st_distancespheroid: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      st_dwithin: {
        Args: {
          geog1: unknown
          geog2: unknown
          tolerance: number
          use_spheroid?: boolean
        }
        Returns: boolean
      }
      st_equals: { Args: { geom1: unknown; geom2: unknown }; Returns: boolean }
      st_expand:
        | {
            Args: {
              dm?: number
              dx: number
              dy: number
              dz?: number
              geom: unknown
            }
            Returns: unknown
          }
        | {
            Args: { box: unknown; dx: number; dy: number; dz?: number }
            Returns: unknown
          }
        | { Args: { box: unknown; dx: number; dy: number }; Returns: unknown }
      st_force3d: { Args: { geom: unknown; zvalue?: number }; Returns: unknown }
      st_force3dm: {
        Args: { geom: unknown; mvalue?: number }
        Returns: unknown
      }
      st_force3dz: {
        Args: { geom: unknown; zvalue?: number }
        Returns: unknown
      }
      st_force4d: {
        Args: { geom: unknown; mvalue?: number; zvalue?: number }
        Returns: unknown
      }
      st_generatepoints:
        | { Args: { area: unknown; npoints: number }; Returns: unknown }
        | {
            Args: { area: unknown; npoints: number; seed: number }
            Returns: unknown
          }
      st_geogfromtext: { Args: { "": string }; Returns: unknown }
      st_geographyfromtext: { Args: { "": string }; Returns: unknown }
      st_geohash:
        | { Args: { geom: unknown; maxchars?: number }; Returns: string }
        | { Args: { geog: unknown; maxchars?: number }; Returns: string }
      st_geomcollfromtext: { Args: { "": string }; Returns: unknown }
      st_geometricmedian: {
        Args: {
          fail_if_not_converged?: boolean
          g: unknown
          max_iter?: number
          tolerance?: number
        }
        Returns: unknown
      }
      st_geometryfromtext: { Args: { "": string }; Returns: unknown }
      st_geomfromewkt: { Args: { "": string }; Returns: unknown }
      st_geomfromgeojson:
        | { Args: { "": Json }; Returns: unknown }
        | { Args: { "": Json }; Returns: unknown }
        | { Args: { "": string }; Returns: unknown }
      st_geomfromgml: { Args: { "": string }; Returns: unknown }
      st_geomfromkml: { Args: { "": string }; Returns: unknown }
      st_geomfrommarc21: { Args: { marc21xml: string }; Returns: unknown }
      st_geomfromtext: { Args: { "": string }; Returns: unknown }
      st_gmltosql: { Args: { "": string }; Returns: unknown }
      st_hasarc: { Args: { geometry: unknown }; Returns: boolean }
      st_hausdorffdistance: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      st_hexagon: {
        Args: { cell_i: number; cell_j: number; origin?: unknown; size: number }
        Returns: unknown
      }
      st_hexagongrid: {
        Args: { bounds: unknown; size: number }
        Returns: Record<string, unknown>[]
      }
      st_interpolatepoint: {
        Args: { line: unknown; point: unknown }
        Returns: number
      }
      st_intersection: {
        Args: { geom1: unknown; geom2: unknown; gridsize?: number }
        Returns: unknown
      }
      st_intersects:
        | { Args: { geom1: unknown; geom2: unknown }; Returns: boolean }
        | { Args: { geog1: unknown; geog2: unknown }; Returns: boolean }
      st_isvaliddetail: {
        Args: { flags?: number; geom: unknown }
        Returns: Database["public"]["CompositeTypes"]["valid_detail"]
        SetofOptions: {
          from: "*"
          to: "valid_detail"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      st_length:
        | { Args: { geog: unknown; use_spheroid?: boolean }; Returns: number }
        | { Args: { "": string }; Returns: number }
      st_letters: { Args: { font?: Json; letters: string }; Returns: unknown }
      st_linecrossingdirection: {
        Args: { line1: unknown; line2: unknown }
        Returns: number
      }
      st_linefromencodedpolyline: {
        Args: { nprecision?: number; txtin: string }
        Returns: unknown
      }
      st_linefromtext: { Args: { "": string }; Returns: unknown }
      st_linelocatepoint: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      st_linetocurve: { Args: { geometry: unknown }; Returns: unknown }
      st_locatealong: {
        Args: { geometry: unknown; leftrightoffset?: number; measure: number }
        Returns: unknown
      }
      st_locatebetween: {
        Args: {
          frommeasure: number
          geometry: unknown
          leftrightoffset?: number
          tomeasure: number
        }
        Returns: unknown
      }
      st_locatebetweenelevations: {
        Args: { fromelevation: number; geometry: unknown; toelevation: number }
        Returns: unknown
      }
      st_longestline: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_makebox2d: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_makeline: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_makevalid: {
        Args: { geom: unknown; params: string }
        Returns: unknown
      }
      st_maxdistance: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      st_minimumboundingcircle: {
        Args: { inputgeom: unknown; segs_per_quarter?: number }
        Returns: unknown
      }
      st_mlinefromtext: { Args: { "": string }; Returns: unknown }
      st_mpointfromtext: { Args: { "": string }; Returns: unknown }
      st_mpolyfromtext: { Args: { "": string }; Returns: unknown }
      st_multilinestringfromtext: { Args: { "": string }; Returns: unknown }
      st_multipointfromtext: { Args: { "": string }; Returns: unknown }
      st_multipolygonfromtext: { Args: { "": string }; Returns: unknown }
      st_node: { Args: { g: unknown }; Returns: unknown }
      st_normalize: { Args: { geom: unknown }; Returns: unknown }
      st_offsetcurve: {
        Args: { distance: number; line: unknown; params?: string }
        Returns: unknown
      }
      st_orderingequals: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_overlaps: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_perimeter: {
        Args: { geog: unknown; use_spheroid?: boolean }
        Returns: number
      }
      st_pointfromtext: { Args: { "": string }; Returns: unknown }
      st_pointm: {
        Args: {
          mcoordinate: number
          srid?: number
          xcoordinate: number
          ycoordinate: number
        }
        Returns: unknown
      }
      st_pointz: {
        Args: {
          srid?: number
          xcoordinate: number
          ycoordinate: number
          zcoordinate: number
        }
        Returns: unknown
      }
      st_pointzm: {
        Args: {
          mcoordinate: number
          srid?: number
          xcoordinate: number
          ycoordinate: number
          zcoordinate: number
        }
        Returns: unknown
      }
      st_polyfromtext: { Args: { "": string }; Returns: unknown }
      st_polygonfromtext: { Args: { "": string }; Returns: unknown }
      st_project: {
        Args: { azimuth: number; distance: number; geog: unknown }
        Returns: unknown
      }
      st_quantizecoordinates: {
        Args: {
          g: unknown
          prec_m?: number
          prec_x: number
          prec_y?: number
          prec_z?: number
        }
        Returns: unknown
      }
      st_reduceprecision: {
        Args: { geom: unknown; gridsize: number }
        Returns: unknown
      }
      st_relate: { Args: { geom1: unknown; geom2: unknown }; Returns: string }
      st_removerepeatedpoints: {
        Args: { geom: unknown; tolerance?: number }
        Returns: unknown
      }
      st_segmentize: {
        Args: { geog: unknown; max_segment_length: number }
        Returns: unknown
      }
      st_setsrid:
        | { Args: { geom: unknown; srid: number }; Returns: unknown }
        | { Args: { geog: unknown; srid: number }; Returns: unknown }
      st_sharedpaths: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_shortestline: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_simplifypolygonhull: {
        Args: { geom: unknown; is_outer?: boolean; vertex_fraction: number }
        Returns: unknown
      }
      st_split: { Args: { geom1: unknown; geom2: unknown }; Returns: unknown }
      st_square: {
        Args: { cell_i: number; cell_j: number; origin?: unknown; size: number }
        Returns: unknown
      }
      st_squaregrid: {
        Args: { bounds: unknown; size: number }
        Returns: Record<string, unknown>[]
      }
      st_srid:
        | { Args: { geom: unknown }; Returns: number }
        | { Args: { geog: unknown }; Returns: number }
      st_subdivide: {
        Args: { geom: unknown; gridsize?: number; maxvertices?: number }
        Returns: unknown[]
      }
      st_swapordinates: {
        Args: { geom: unknown; ords: unknown }
        Returns: unknown
      }
      st_symdifference: {
        Args: { geom1: unknown; geom2: unknown; gridsize?: number }
        Returns: unknown
      }
      st_symmetricdifference: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_tileenvelope: {
        Args: {
          bounds?: unknown
          margin?: number
          x: number
          y: number
          zoom: number
        }
        Returns: unknown
      }
      st_touches: { Args: { geom1: unknown; geom2: unknown }; Returns: boolean }
      st_transform:
        | { Args: { geom: unknown; to_proj: string }; Returns: unknown }
        | {
            Args: { from_proj: string; geom: unknown; to_srid: number }
            Returns: unknown
          }
        | {
            Args: { from_proj: string; geom: unknown; to_proj: string }
            Returns: unknown
          }
      st_triangulatepolygon: { Args: { g1: unknown }; Returns: unknown }
      st_union:
        | {
            Args: { geom1: unknown; geom2: unknown; gridsize: number }
            Returns: unknown
          }
        | { Args: { geom1: unknown; geom2: unknown }; Returns: unknown }
      st_voronoilines: {
        Args: { extend_to?: unknown; g1: unknown; tolerance?: number }
        Returns: unknown
      }
      st_voronoipolygons: {
        Args: { extend_to?: unknown; g1: unknown; tolerance?: number }
        Returns: unknown
      }
      st_within: { Args: { geom1: unknown; geom2: unknown }; Returns: boolean }
      st_wkbtosql: { Args: { wkb: string }; Returns: unknown }
      st_wkttosql: { Args: { "": string }; Returns: unknown }
      st_wrapx: {
        Args: { geom: unknown; move: number; wrap: number }
        Returns: unknown
      }
      unlockrows: { Args: { "": string }; Returns: number }
      update_wallet_balance_after_recharge: {
        Args: { addition_amount: number; dealer_id_input: string }
        Returns: undefined
      }
      update_wallet_balance_after_withdrawal: {
        Args: { dealer_id_input: string; deduction_amount: number }
        Returns: undefined
      }
      updategeometrysrid: {
        Args: {
          catalogn_name: string
          column_name: string
          new_srid_in: number
          schema_name: string
          table_name: string
        }
        Returns: string
      }
    }
    Enums: {
      employment_type_enum: "full_time" | "part_time" | "contractor"
      gender_enum: "male" | "female" | "other"
      policy_type: "RSA" | "VAS" | "BUNDLED"
      status_enum: "pending" | "approved" | "rejected" | "inactive"
    }
    CompositeTypes: {
      geometry_dump: {
        path: number[] | null
        geom: unknown
      }
      top_dealer_employee: {
        name: string | null
        total_customers: number | null
        total_revenue: number | null
      }
      valid_detail: {
        valid: boolean | null
        reason: string | null
        location: unknown
      }
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      employment_type_enum: ["full_time", "part_time", "contractor"],
      gender_enum: ["male", "female", "other"],
      policy_type: ["RSA", "VAS", "BUNDLED"],
      status_enum: ["pending", "approved", "rejected", "inactive"],
    },
  },
} as const
